import React from 'react';
import './modal.css';

const Modal = ({ title, content }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;