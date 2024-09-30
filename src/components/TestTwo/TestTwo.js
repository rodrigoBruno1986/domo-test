import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './TestTwo.css';
import { useNavigate } from 'react-router-dom';

function TestTwo() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className='back-home-btn'
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',

          top: '50%',
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        <i className='fas fa-arrow-left'></i>
      </button>
      <header>
        <div className='navbar navbar-light bg-white box-shadow'>
          <div className='container  justify-content-between align-items-center'>
            <div className='social-net d-none d-md-flex align-items-center'>
              <a className='mx-2'>
                <i className='fab fa-x-twitter'></i>
              </a>
              <a className='mx-2'>
                <i className='fab fa-instagram'></i>
              </a>
              <a className='mx-2'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a className='mx-2'>
                <i className='fab fa-dribbble'></i>
              </a>
            </div>

            <div className='d-flex align-items-center'>
              <img src='/comet.png' alt='Comet Logo' className='logo-comet' />
            </div>
            <button className='button-none'>
              <span className='equal'></span>
            </button>
          </div>
        </div>
      </header>

      <div className='container-auto text-center mt-3'>
        <div className='row align-items-center revert-mobile'>
          <div className='col-md-6 d-flex flex-column align-items-start info '>
            <span className='text-primary text-left mb-3'>Core features</span>
            <h2 className='text-left'>
              Develop systematically <br /> with Comet.
            </h2>
            <p className='text-muted text-left text mt-3'>
              <span> Adaptable sections are </span>
              ideal for crafting versatile layouts.
            </p>
            <div className='container mt-4'>
              <div className='row'>
                <div className='col-md-6 col-lg-6 mb-4 text-left'>
                  <img
                    src='/dactilar.png'
                    alt='System analyze your data'
                    className='img-fluid'
                    style={{ width: '70px' }}
                  />
                  <h5 className='mt-3'>System analyze your data</h5>
                  <p className='text-muted'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a className='learn-more-link'>
                    Learn more{' '}
                    <i className='fas fa-arrow-right rotated-arrow'></i>
                  </a>
                </div>
                <div className='col-md-6 col-lg-6 mb-4 text-left'>
                  <img
                    src='/24hs.png'
                    alt='Direct system management'
                    className='img-fluid'
                    style={{ width: '70px' }}
                  />
                  <h5 className='mt-3'>Direct system management</h5>
                  <p className='text-muted'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a className='learn-more-link'>
                    Learn more{' '}
                    <i className='fas fa-arrow-right rotated-arrow'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 text-center mt-mobile '>
            <img
              src='/imageTextTwo.png'
              alt='Person working on a laptop'
              className='img-fluid rounded imagen-fluid'
            />
          </div>
        </div>
      </div>
      <footer>
        <div className='social-net-mobile d-flex align-items-center d-md-none'>
          <a className='mx-2'>
            <i className='fab fa-x-twitter'></i>
          </a>
          <a className='mx-2'>
            <i className='fab fa-instagram'></i>
          </a>
          <a className='mx-2'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a className='mx-2'>
            <i className='fab fa-dribbble'></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default TestTwo;
