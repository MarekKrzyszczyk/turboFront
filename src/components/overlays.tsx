import { render, unmountComponentAtNode } from "react-dom";


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

function getTransitionDuration(node: Element, recursive = false) {
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

export function startCSSTransition(node: HTMLElement, state: string, callback?: Function) {
  const onTransitionEnd = function() {
    node.removeEventListener("transitionend", onTransitionEnd);
    if (callback) callback();
  }
  node.dataset.transitionState = state + "ing";
  node.scrollTop; // eslint-disable-line @typescript-eslint/no-unused-expressions
  node.dataset.transitionState = state;

  const duration = getTransitionDuration(node, true);
  if (duration > 0) {
    node.addEventListener("transitionend", onTransitionEnd);
  } else {
    onTransitionEnd();
  }
}

export function openModal(componentFn: Function, { transitionName = "scale", autoDismissable = false, onClose }: {transitionName: string, autoDismissable: boolean, onClose?: Function}) {
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