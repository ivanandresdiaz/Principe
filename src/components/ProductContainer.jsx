import React from 'react';

const ProductContainer = ({ children }) => {
  return (
    <div className='d-flex flex-wrap'>
      {children}
    </div>
  );
};

export default ProductContainer;
