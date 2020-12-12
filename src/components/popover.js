import React, { useRef } from 'react';
import clsx from 'clsx';
import { openOverlay } from './overlays';
import { useLocalObservable, observer } from 'mobx-react-lite';


export const PopoverContainer = ({ children, style, contentStyle, contentClassName, className, arrow = false }) => {
  const popover = (
    <div className={clsx('popover', {'with-arrow': arrow}, className)} style={style}>
      <div className={clsx('popover-content', contentClassName)} style={contentStyle}>
        {children}
      </div>
      {arrow && <div className="popover-arrow" data-popper-arrow="" />}
    </div>
  );
  return popover;
};

export const Popover = observer(({children: targetFn, content: contentFn, transitionName = 'opacity', placement = 'bottom', sameWidth = false, offset }) => {
  const ref = useRef();
  const state = useLocalObservable(() => ({
    isOpen: false,
  }));

  function openPopover() {
    openOverlay(
      ({ close }) => contentFn({ close }),
      ref.current, {
      transitionName,
      placement,
      viewportBoundaries: true,
      sameWidth: sameWidth,
      offset,
      onClose() {
        state.isOpen = false;
      },
    });
    state.isOpen = true;
  }

  return targetFn({ ref, openPopover, isOpen: state.isOpen });
});