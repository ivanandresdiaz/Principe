import React from 'react';
import '../styles/Close.scss';

const CloseModal = () => {
  return (
    <div className='wrapper'>
      <div className='close-button'>
        <div className='in'>
          <div className='close-button-block' />
          <div className='close-button-block' />
        </div>
        <div className='out'>
          <div className='close-button-block' />
          <div className='close-button-block' />
        </div>
      </div>
    </div>
  );
};

export default CloseModal;
