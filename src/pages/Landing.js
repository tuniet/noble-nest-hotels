import '../styles/Landing.css'
import React from 'react';
import { useTranslation } from 'react-i18next';
import Booking from '../components/BookingComp';
import RoomsLanding from '../components/RoomsLanding';
const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className='landing'>
      <div className='hero'>
        <div className='hero-txt'>
          <div>
            <h1 className='hero-title'>NOBEL NEST HOTEL</h1>
            <Booking />
          </div>
            
        </div>
        <div className='hero-info'>

        </div>
      </div>
      <div className='rooms'>
        <RoomsLanding />

      </div>
    </div>
  );
};

export default Landing;
