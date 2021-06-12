import React from 'react';
import { connect } from 'react-redux';
import CarritoSubtotal from '../components/CarritoSubtotal';
import ItemCarrito from '../components/ItemCarrito';

const Carrito = (props) => {
  const { carrito } = props;
  console.log('carriot',carrito)
  return (
    <>
      <section className="Carrito">
        <div className='container-items-container'>
          {carrito.map((item) => <ItemCarrito  key={item.id} id={item.id} image={item.imagen} nombre={item.nombre} cantidad={item.cantidad} precio={item.precio} />)}
        </div>
        <div className='container__carritoSubtotal'>
          <CarritoSubtotal />
        </div>
      </section>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    carrito: state.carrito,
  };
};
export default connect(mapStateToProps, null)(Carrito);
