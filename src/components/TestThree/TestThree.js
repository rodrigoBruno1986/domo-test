import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { MouseFollower } from 'react-mouse-follower';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import './TestThree.css';

function TestThree() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const MobileMenu = () => (
    <>
      <button
        className='navbar-toggler'
        type='button'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <span className='close-icon'>✖</span>
        ) : (
          <span className='navbar-toggler-icon'>☰</span>
        )}
      </button>

      <button
        className='navbar-toggler'
        type='button'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <span className='close-icon'>✖</span>
        ) : (
          <span className='navbar-toggler-icon'>☰</span>
        )}
      </button>

      <div className={isOpen ? 'menu menu-open' : 'menu'}>
        <ul className='nav-list d-flex flex-column align-items-start mt-3'>
          <li className='nav-item'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#'>Work</a>
          </li>
          <li className='nav-item'>
            <a href='#'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#'>Contact</a>
          </li>
          <li className='nav-item'>
            <a href='#'>Cart (0)</a>
          </li>
        </ul>
      </div>
    </>
  );
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#scroll-container'),
      smooth: true,
      multiplier: 1.5,
    });
    return () => scroll.destroy();
  }, []);

  return (
    <div
      id='scroll-container'
      className='container-fluid main-layout'
      style={{ overflow: 'hidden' }}
    >
      <header className='d-flex justify-content-between align-items-center p-4'>
        <div className='logo'>
          <img src='/logo-m.png' alt='Logo' className='logo-imgm' />
        </div>

        {isMobile ? (
          <MobileMenu />
        ) : (
          <nav className='nav'>
            <div className='nav-text'>
              <span>
                A digital agency <br /> based in Munich
              </span>
            </div>
            <ul className='nav-list d-flex flex-column align-items-start mt-3'>
              <li className='nav-item'>
                <a href='#'>Home</a>
              </li>
              <li className='nav-item'>
                <a href='#'>Work</a>
              </li>
              <li className='nav-item'>
                <a href='#'>About</a>
              </li>
              <li className='nav-item'>
                <a href='#'>Contact</a>
              </li>
              <li className='nav-item'>
                <a href='#'>Cart (0)</a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className='d-flex justify-content-between align-items-center'>
        <div className='text-block'>
          <h1 className='main-title'>
            High-End
            <br />
            <span>Digital Studio</span>
          </h1>
        </div>
      </main>

      {!isMobile && (
        <MouseFollower
          color='black'
          size={10}
          borderRadius='50%'
          zIndex={1000}
        />
      )}
      <section
        className='section-mobile'
        style={{
          height: '100vh',
          backgroundColor: '#f0f0f0',
          position: 'relative',
        }}
      >
        <img
          className='rayo-img'
          data-scroll
          data-scroll-speed='3'
          src='/rayo.png'
          alt='Rocket flying'
          style={{
            width: '100px',
            position: 'absolute',
            left: '2%',
            top: '-30%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <img
          className='cohete-img'
          data-scroll
          data-scroll-speed='6'
          src='/cohete.png'
          alt='Rocket flying'
          style={{
            width: '200px',
            position: 'absolute',
            left: '80%',
            top: '-55%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className='content-seccion'
          style={{
            position: 'absolute',
            bottom: '50%',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <a
            href='https://www.linkedin.com/in/rodrigo-sebastian-benitez-426055158/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              className='fab fa-linkedin'
              style={{ fontSize: '80px', color: '#0077B5' }}
            ></i>
          </a>
          <img
            src='https://domo.com.ar/assets/barra-colores-domo-9b30950e.svg'
            alt=''
          />
          <button
            className='back-home-btn'
            onClick={() => navigate('/')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
            data-scroll
            data-scroll-speed='1'
          >
            <i className='fas fa-arrow-left'></i>
          </button>
        </div>
      </section>
    </div>
  );
}

export default TestThree;
