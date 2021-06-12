import React from 'react';
import { connect } from 'react-redux';
import { setCarrito } from '../actions';

const productItem = (props) => {
  const { id, imagen, descripcion, nombre, precio, talla, cantidad } = props;
  const handleSetCarrito = () => {
    props.setCarrito({
      id, imagen, descripcion, nombre, precio, talla, cantidad,
    });
  };
  return (
    <div className='col-4 mb-2 col-md-4 mt-3 btnDataClothe'>
      <div className='card-sm-6'>
        <div className='view zoom overlay'>
          <img className='img-fluid w-100' src={imagen} alt={nombre} />
          <h4 className='mb-0'><span className='badge badge-primary badge-pill badge-news'>Sale</span></h4>
        </div>
        <div className='card-body text-center'>
          <h5>{nombre}</h5>
          <button type='button' className='btn btn-primary' onClick={handleSetCarrito}>Agregar al carrito</button>
          <h6 className='mb-3'>
            <span className='text-danger mr-1'>{precio}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setCarrito,
};
export default connect(null, mapDispatchToProps)(productItem);
