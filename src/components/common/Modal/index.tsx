import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const ModalContext = React.createContext<any>(null);

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

const Modal = forwardRef(function Modal(props: Props, ref) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      show: openModal,
      close: closeModal,
    }),
    [],
  );

  function openModal() {
    setIsOpen(true);
    if (dialogRef.current) dialogRef.current.show();
  }

  function closeModal() {
    setIsOpen(false);
    if (dialogRef.current) dialogRef.current.close();
  }

  return (
    <dialog ref={dialogRef} className="bg-[#000000C9] z-9999 modal">
      <div
        className={`modal-box  rounded-10 !bg-[#090909] p-[60px] border border-[#303239] ${props.className}`}
      >
        <ModalContext.Provider value={{ isOpen, closeModal }}>
          {props.children}
        </ModalContext.Provider>
      </div>
    </dialog>
  );
});

export default Modal;
