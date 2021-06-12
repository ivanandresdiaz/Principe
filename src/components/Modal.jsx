import React from 'react';
import ReactDOM from 'react-dom';
import CloseModal from './CloseModal';

const Modal = (props) => {
  const { isOpen, children } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <>
      {ReactDOM.createPortal(
        <div className='Modal'>
          <div className='Modal__container'>
            <div className='d-flex justify-content-around'>
              <h2>Carrito</h2>
              <div className='d-flex justify-content-end'>
                <div onClick={props.onClose} className='d-flex justify-content-between'>
                  <CloseModal />
                </div>
              </div>
            </div>

            {children}
          </div>
        </div>,
        document.getElementById('modal'),
      )}
    </>
  );
};

export default Modal;
