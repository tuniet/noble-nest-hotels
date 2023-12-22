import '../styles/Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <Link to="/" className="navbar-title link">NOBEL NEST</Link>
      <div className="right">
        <Link to="/facilities" className="link">{t('facilities')}</Link>
        <Link to="/rooms" className="link">{t('rooms')}</Link>
        <span className='separator'></span>
        <LanguageSelector />
         MENU <IoMdMenu />
      </div>
    </div>
  );
};

export default Navbar;

