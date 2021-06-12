import React from 'react';
import { connect } from 'react-redux';
import { setCarrito } from '../actions';
import ProductContainer from '../components/ProductContainer';
import ProductItem from '../components/ProductItem';

const collections = (props) => {
  const { tienda} = props;
  return (
    <div className='container-fluid bg-white'>
      <div className='container'>
        <div className='row ' id='clothes'>
          <ProductContainer>
            {tienda.map((item) => <ProductItem key={item.id} id={item.id} imagen={item.imagen.vista3} descripcion={item.descripcion} nombre={item.nombre} precio={item.precio} talla={item.talla} cantidad={item.cantidad}/>)}
          </ProductContainer>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tienda: state.tienda,
    carrito: state.carrito,
  };
};
const mapDispatchToProps = {
  setCarrito,
};
export default connect(mapStateToProps, mapDispatchToProps)(collections);
