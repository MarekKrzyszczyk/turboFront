import { render, unmountComponentAtNode } from "react-dom";
import { createPopper } from "@popperjs/core";


const MODAL_ROOT_ID = "__modals";
const ANCHOR_ID = "root";

function getModalRoot() {
  let root = document.getElementById(MODAL_ROOT_ID);
  if (!root) {
    root = document.createElement("div");
    root.id = MODAL_ROOT_ID;
    document.getElementById(ANCHOR_ID)?.insertAdjacentElement('afterend', root);
  }
  return root;
}

function getTransitionDuration(node, recursive = false) {
  const durations = getComputedStyle(node)
    .transitionDuration.split(",")
    .map(s => parseFloat(s));
  let duration = Math.max(...durations);

  if (duration === 0 && recursive) {
    duration = Math.max(
      0,
      ...Array.from(node.children).map(node => getTransitionDuration(node)),
    );
  }
  return duration
}

export function startCSSTransition(node, state, callback) {
  const onTransitionEnd = function() {
    node.removeEventListener("transitionend", onTransitionEnd);
    if (callback) callback();
  }
  node.dataset.transitionState = state + "ing";
  node.scrollTop; // eslint-disable-line no-unused-expressions
  node.dataset.transitionState = state;

  const duration = getTransitionDuration(node, true);
  if (duration > 0) {
    node.addEventListener("transitionend", onTransitionEnd);
  } else {
    onTransitionEnd();
  }
}

export function openModal(componentFn, { transitionName = "scale", autoDismissable = false, onClose } = {}) {
  const root = getModalRoot();
  const backdrop = document.createElement("div");
  backdrop.className = "backdrop";
  root.appendChild(backdrop);

  const container = document.createElement("div");
  container.className = "modal-container";
  container.dataset.transitionName = transitionName;
  root.appendChild(container);

  function close() {
    startCSSTransition(backdrop, "exit");
    startCSSTransition(container, "exit", () => {
      unmountComponentAtNode(container);
      container.remove();
      backdrop.remove();
    });
    if (onClose) {
      onClose(...Array.from(arguments));
    }
  }

  render(componentFn({ close }), container, () => {
    startCSSTransition(backdrop, "enter");
    startCSSTransition(container, "enter");
    if (autoDismissable) {
      backdrop.addEventListener("click", () => close());
    }
  })

  return { close };
}

export function openOverlay(contentFn, target, {
    transitionName = "popover",
    placement = "auto",
    autoDismissable = true,
    viewportBoundaries = false,
    sameWidth = false,
    offset = null,
    onClose,
  } = {}
) {
  let popper = null;
  const root = document.getElementById(MODAL_ROOT_ID);
  const container = document.createElement("div");
  container.className = "popover-container";
  if (transitionName) container.dataset.transitionName = transitionName;
  root.appendChild(container);

  const onDocumentClick = function(e) {
    if (e.target !== container && !container.contains(e.target)) close();
  };

  const close = function() {
    startCSSTransition(container, "exit", () => {
      document.removeEventListener("click", onDocumentClick);
      unmountComponentAtNode(container);
      container.remove();
      popper.destroy();
    });
    if (onClose) onClose(...Array.from(arguments));
  };

  render(contentFn({ close }), container, () => {
    const modifiers = [];
    if (offset) {
      modifiers.push({
        name: 'offset',
        options: { offset },
      });
    }
    if (viewportBoundaries) {
      modifiers.push({
        name: 'preventOverflow',
      });
    }
    if (sameWidth) {
      modifiers.push({
        name: 'sameWidth',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: ({ state }) => {
          state.styles.popper.minWidth = state.rects.reference.width + 'px';
        },
        effect: ({ state }) => {
          state.elements.popper.style.minWidth = state.elements.reference.offsetWidth + 'px';
        }
      });
    }
    const options = {
      placement,
      modifiers,
    };
    popper = createPopper(target, container, options);
    startCSSTransition(container, "enter");
    if (autoDismissable) {
      document.addEventListener("click", onDocumentClick, false);
    }
  });

  const popover = { close };
  return popover;
}