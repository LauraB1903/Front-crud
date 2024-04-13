import React from 'react';
import "./Style/modal.css"

const Modal = ({isOpen, onClose, children}) => {
    return (
      <div className='Modal-container' style={{display:isOpen ? "grid":"none"}}>
        <div className="Modal-body">
          <button className="buton btn btn-" onClick={onClose}><ion-icon name="chevron-down-outline"></ion-icon></button>
          {children}
        </div>
      </div>
    );
}

export default Modal;