import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='content-home'>
      <header>
        <div className='navbar-home bg-white box-shadow'>
          <div className='container d-flex justify-content-between'>
            <a
              href='https://domo.com.ar/'
              className='navbar-brand d-flex align-items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='47.453'
                height='47.453'
                viewBox='0 0 67.453 67.453'
              >
                <path
                  id='domo-logo-esfera'
                  d='M361.453,0a33.727,33.727,0,1,0,33.726,33.726A33.727,33.727,0,0,0,361.453,0M379.4,36.539H343.5A3.536,3.536,0,0,1,339.966,33a21.487,21.487,0,1,1,42.974,0,3.536,3.536,0,0,1-3.536,3.536'
                  transform='translate(-327.726)'
                  fill='#000'
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <div role='div test'>
        <section className='jumbotron text-center'>
          <div className='container'>
            <h1 className='jumbotron-heading'>Challenge DOMO</h1>
            <p>Front End Rodrigo Benitez</p>
          </div>
        </section>

        <div className='album py-4 bg-white mt-23'>
          <div className='container'>
            <div className='row home-row'>
              <div className='col-md-4' data-aos='fade-up'>
                <div className='card mb-4 box-shadow'>
                  <img
                    className='card-img-top'
                    src='/test-1.jpeg'
                    alt='Thumbnail'
                  />
                  <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => navigate('/testone')}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4' data-aos='fade-up'>
                <div className='card mb-4 box-shadow'>
                  <img
                    className='card-img-top'
                    src='/comet-page2.png'
                    alt='Thumbnail'
                  />
                  <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => navigate('/testtwo')}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4' data-aos='fade-up'>
                <div className='card mb-4 box-shadow'>
                  <img
                    className='card-img-top'
                    src='/high.png'
                    alt='Thumbnail'
                  />
                  <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => navigate('/TestThree')}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer horizontal */}
        <footer className='footer mt-5'>
          <div className='footer-container d-flex justify-content-between align-items-center'>
            <div className='footer-left'>
              <h4>Contacto</h4>
              <p>
                <strong>Rodrigo Sebastián Benítez</strong>
                <br />
                Email: rodrigo.sbenitez@gmail.com
                <br />
                Teléfono: +54 9 11 6451-3491
                <br />
                Ubicación: Buenos Aires, Argentina
              </p>
            </div>
            <div className='footer-right'>
              <h4>Sobre el Proyecto</h4>
              <p>
                Este proyecto es el resultado de un desafío de maquetación y
                desarrollo web utilizando React.js. El propósito principal fue
                implementar una solución de interfaz intuitiva y adaptable. Se
                hizo énfasis en mantener un código modular y reutilizable para
                mejorar la experiencia del usuario.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
