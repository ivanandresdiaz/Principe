import React from 'react';
import { connect } from 'react-redux';
import { setPurchase } from '../actions';

const CarritoSubtotal = (props) => {
  const { carrito } = props;
  const precios = carrito.map((item) => parseInt(item.precio, 10) * 1000);
  const subTotal = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
  const subTotalFormat = new Intl.NumberFormat().format(subTotal);
  const iva = subTotal * 0.19;
  const ivaFormat = new Intl.NumberFormat().format(iva);
  const total = subTotal + iva;
  const totalFormat = new Intl.NumberFormat().format(total);
  const handleSetPurchase = () => {
    props.setPurchase({
      total,
    });
  };
  return (
    <div className='CarritoSubtotal'>
      <div className='d-flex'>
        <div className='CarritoSubtotal__subtotal-container px-5 '>
          <p>
            Subtotal: $
            {subTotalFormat}
          </p>
        </div>
        <div className='CarritoSubtotal__subtotal-container px-5'>
          <p>
            Iva 19% : $
            {ivaFormat}
          </p>
        </div>
      </div>
      <div className='CarritoSubtotal__subtotal-container CarritoSubtotal__total-pagar'>
        <h5>
          Total a pagar: $
          {totalFormat}
        </h5>
      </div>
      <div className='Subtotal-pagar-button py-2 d-flex justify-content-center'>
        <button type='button' className='btn btn-primary px-5 rounded-pill' onClick={handleSetPurchase}>Pagar</button>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setPurchase,
};
const mapStateToProps = (state) => {
  return {
    carrito: state.carrito,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CarritoSubtotal);
