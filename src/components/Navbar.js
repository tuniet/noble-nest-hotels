import '../styles/Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { BiMenuAltRight } from "react-icons/bi";
import logo from '../images/logo.png'


const Navbar = () => {
  const { t } = useTranslation();




  return (
    <div className="navbar">
      <div className="left">
        <BiMenuAltRight /> MENU
        <div className='menu-plegable'>
          <Link to="/about" className="nav-link">{t('about')}</Link>
          <Link to="/rooms" className="nav-link">{t('rooms')}</Link>
        </div>
      </div>
      <Link to="/" className="navbar-title"><img src={logo} className='logo'/></Link>
      <div className="right">
        <LanguageSelector />
        <Link to="/contact" className="nav-link">{t('contact')}</Link>
      </div>
    </div>
  );
};

export default Navbar;

