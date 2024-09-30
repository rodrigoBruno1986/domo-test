import React from 'react';
import { useNavigate } from 'react-router-dom';

import './TestOne.css';

function TestOne() {
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
        <div class='navbar navbar-dark bg-white box-shadow'>
          <div class='container d-flex justify-content-between'>
            <a class='navbar-brand d-flex align-items-center logo-p'>
              <img src='logo_testone.png' alt='' />
            </a>
            <button class='circle-button'>
              <span class='equal'></span>
            </button>
          </div>
        </div>
      </header>
      <div className='container-auto text-center mt-6'>
        <div className='row justify-content-center'>
          <div className='col-6 col-sm-6 col-md-3 d-flex justify-content-center'>
            <div
              className='circle d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#0259ff' }}
            >
              <h3 className='text-white'>Prototyping</h3>
            </div>
          </div>
          <div className='col-6 col-sm-6 col-md-3 d-flex justify-content-center'>
            <div
              className='circle d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#b304fe' }}
            >
              <h3 className='text-white'>Branding</h3>
            </div>
          </div>

          <div className='col-6 col-sm-6 col-md-3 d-flex justify-content-center'>
            <div
              className='circle d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#01ff42' }}
            >
              <h3 className='text-white'>Design</h3>
            </div>
          </div>

          <div className='col-6 col-sm-6 col-md-3 d-flex justify-content-center'>
            <div
              className='circle d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#fe2a02' }}
            >
              <h3 className='text-white'>Strategy</h3>
            </div>
          </div>
        </div>

        <div className='mt-6'>
          <h5>We worked with the world's biggest brands</h5>
          <div class='container mt-5'>
            <div class='row justify-content-around align-items-center'>
              <div class='col-6 col-md-2 text-center mb-3'>
                <img src='/ecooxygen.png' alt='ecooxygen' class='img-fluid' />
              </div>
              <div class='col-6 col-md-2 text-center mb-3'>
                <img src='/techcube.png' alt='techcube' class='img-fluid' />
              </div>
              <div class='col-6 col-md-2 text-center mb-3'>
                <img src='/touch.png' alt='touch' class='img-fluid' />
              </div>
              <div class='col-6 col-md-2 text-center mb-3'>
                <img src='/cloudbar.png' alt='cloudbar' class='img-fluid' />
              </div>
              <div class='col-6 col-md-2 text-center mb-3'>
                <img src='/growth.png' alt='growth' class='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestOne;
