/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { setCarrito } from '../actions';
import imgKoaj from '../img/koaj.jpg';
import imgRickmorty from '../img/rick&morty.jpg';
import imgSistecredito from '../img/sistecredito.jpg';
import iconCar from '../img/car.png';
import iconLock from '../img/lock.png';
import iconEntrega from '../img/entrega.png';
import iconMoney from '../img/money.png';

const PaginaPrincipal = (props) => {
  const { tienda, carrito } = props;
  // const handleSetCarrito = () => {
  //   props.setFavorite({

  //   });
  // };
  console.log(tienda);
  console.log(carrito);
  return (
    <>
      <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          />
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={imgKoaj} className='d-block w-100' alt='ropa de hombre' />
          </div>
          <div className='carousel-item'>
            <img src={imgRickmorty} className='d-block w-100' alt='ropa de hombre' />
          </div>
          <div className='carousel-item'>
            <img src={imgSistecredito} className='d-block w-100' alt='ropa de hombre' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <div className='row bloques'>
        <div className='d-flex p-3 rounded-3 flex-column align-items-center col-2 div-color m-auto text-wrap'>
          <img src={iconCar} className='float-left icono' alt='' />
          <p className='text-center fw-bold'>Envios gratis por tu compra</p>
        </div>
        <div className='d-flex p-3 rounded-3 flex-column align-items-center col-2 div-color m-auto text-wrap'>
          <img src={iconLock} className='float-left icono' alt='' />
          <p className='text-center fw-bold'>Pagos online 100% seguros</p>
        </div>
        <div className='d-flex p-3 rounded-3 flex-column align-items-center col-2 div-color m-auto text-wrap'>
          <img src={iconEntrega} className='float-left icono' alt='' />
          <p className='text-center fw-bold'>90 días para hacer lo cambios ¡¡¡Gratis!!!</p>
        </div>
        <div className='d-flex p-3 rounded-3 flex-column align-items-center col-2 div-color m-auto text-wrap'>
          <img src={iconMoney} className='float-left icono' alt='' />
          <p className='text-center fw-bold'>Pago contraentrega</p>
        </div>
      </div>
      <div className='container margen'>
        <div id='div1' className='content'>
          <h2 className='h2'>Camisas</h2>
        </div>
        <div id='form' className='content'>
          <img className='regalo' src='./img/regalo.png' alt='' />
          <div className='mb-3'>
            <label htmlFor='formGroupExampleInput' className='form-label'>Nombre</label>
            <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Nombre' />
          </div>
          <div className='mb-3'>
            <label htmlFor='formGroupExampleInput2' className='form-label'>Email</label>
            <input type='text' className='form-control' id='formGroupExampleInput2' placeholder='Email' />
          </div>
          <button type='button' className='btn btn-light m-x-auto'>Enviar</button>
        </div>
        <div id='div2' className='content'>
          <h2 className='h2'>Zapatos</h2>
        </div>
      </div>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(PaginaPrincipal);
