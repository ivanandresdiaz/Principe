/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import frescoLogo from '../images/principe-fresco-logo.png';
import user from '../images/user.png';
import carShop from '../images/car-shop.png';
import Carrito from '../pages/Carrito';

const Header = () => {
  const [carritoVisility, setCarritoVisibility] = useState(false);
  const handleCloseModal = () => {
    setCarritoVisibility(!carritoVisility);
  };
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' aria-label='Tenth navbar example'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarsExample08'
              aria-controls='navbarsExample08'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div>
              <a className='navbar-brand' href='/'>
                <img src={frescoLogo} alt='imagen' />
              </a>
            </div>
            <div className='collapse navbar-collapse' id='navbarsExample08'>
              <ul className='navbar-nav text-black'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>Shop</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/collections'>Collections</Link>
                </li>
                <li className='nav-item ps-3 pe-3'>
                  <Link className='nav-link' to='/'>
                    <img src={user} alt='imagen' srcSet='' />
                  </Link>
                </li>
                <li className='nav-item pt-2 ps-3 pe-3 d-flex align-items-center justify-content-center' onClick={handleCloseModal}>
                  <img src={carShop} alt='imagen' />
                  <p className='text-light ps-2 m-0'>Carrito</p>
                </li>
                <Modal isOpen={carritoVisility} onClose={handleCloseModal}>
                  <Carrito />
                </Modal>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;

