import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../img/404.jpg';

const NotFound = () => {
  return (
    <div className='p-5'>
      <div className='container'>
        <h1 className='text-center'>Error 404</h1>
        <p className='text-center'>
          La página que buscas no se encuentran o no existe, estamos trabajando en ello, por ahora
          todo estará bien.
        </p>
        <div className='d-grid gap-1 col-2 mx-auto'>
          <img className='text-center' src={img404} alt='' />
          <p className='text-center'>Te invitamos a que sigas viendo nuestros productos.</p>
          <button type='button' className='btn btn-dark boton'><Link to='/' className='#boton_not text-decoration-none'>Home</Link></button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;

