import React from 'react';
import { Link } from 'react-router-dom';
import imgPrincipeLogo from '../images/principe-fresco-logo.png';
import imgSocialYoutube from '../images/social-youtube.png';
import imgFacebook from '../images/social-facebook.png';
import cover from '../images/cover.jpg';

const Footer = () => {
  return (
    <div className='container-fluid'>
      <img className='img-fluid' src={cover} alt='cover' />
      <footer className='footer py-4 bg-dark '>
        <div className='container w-50 text-xl-center text-md-center text-xxl-center text-lg-center text-sm-center p-2'>
          <Link to='/'>
            <img src={imgPrincipeLogo} alt='' srcSet='' />
          </Link>
          <div className='d-flex justify-content-center'>
            <div className='p-2'>
              <Link to='https://www.youtube.com/' className='btn btn-dark' target='_blank' rel='noreferrer'>
                <img src={imgSocialYoutube} alt='' srcSet='' />
              </Link>
            </div>
            <div className='p-2'>
              <Link to='https://www.facebook.com/' className='btn btn-dark' target='_blank' rel='noreferrer'>
                <img src={imgFacebook} alt='' />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
