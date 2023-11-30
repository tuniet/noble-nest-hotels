import '../styles/Landing.css'
import React from 'react';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className='landing'>
      <div className='hero'>
        <div className='hero-txt'>
          <h1 className='hero-title'>NOBEL NEST HOTEL</h1>
          <div className='reservations'>
            <span className='reservations-item'></span>
            <span className='reservations-item'></span>
            <span className='reservations-item'></span>
            <span className='reservations-button'></span>
          </div>
        </div>
        <div className='hero-info'>

        </div>
      </div>
    </div>
  );
};

export default Landing;
