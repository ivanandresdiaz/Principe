import React from 'react';
import { connect } from 'react-redux';
import { deleteCarrito } from '../actions';
import '../styles/ItemCarritoContainer.scss';

const ItemCarrito = (props) => {
  const { key,id, image, nombre, cantidad, precio, deleteCarrito } = props;
  const handleDeleteItemCarrito = () => {
    deleteCarrito({ id });
  };
  return (
    <div key={key} className='ItemCarrito__container'>
      <img className='ItemCarrito__avatar' src={image} alt={nombre} />
      <div className='ItemCarrito__details'>
        <p>{nombre}</p>
        <p>{precio}</p>
      </div>
      <div className='ItemCarrito__amount'>
        <p className='text-center'>{cantidad}</p>
        <div className='ItemCarrito__remove'>
          <button type='button' className='btn btn-secondary' onClick={handleDeleteItemCarrito}>
            <p className='m-0'>Quitar</p>
          </button>

        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteCarrito,
};

export default connect(null, mapDispatchToProps)(ItemCarrito);
