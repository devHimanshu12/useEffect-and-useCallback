import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({open, children,onClose }) {
  const modalRef = useRef()

  useEffect(()=>{
    if(open){
      modalRef.current.showModal()
    }else{
      modalRef.current.close()  
    }
  },[open])

  return createPortal(
    <dialog className="modal"  ref={modalRef} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
