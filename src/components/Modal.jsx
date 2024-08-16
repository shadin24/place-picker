import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef();

  // Expose open and close methods to parent components via ref
  useImperativeHandle(ref, () => ({
    open() {
      if (dialogRef.current) {
        dialogRef.current.showModal(); // Show the dialog
      }
    },
    close() {
      if (dialogRef.current) {
        dialogRef.current.close(); // Close the dialog
      }
    }
  }));

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
