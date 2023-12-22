import '../styles/LanguageSelector.css'
import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("US");

  function handleChange (e) {
    setSelected(e.target.value)
  }

  useEffect(() => {
    if(selected === 'US'){
        i18n.changeLanguage('en')
    }
    else{
        i18n.changeLanguage('es')
    }
    
  },[i18n, selected]);

  return (
    <div className='lanSel'>
        <select defaultValue={selected} onChange={handleChange}>
          <option value="ES">ES</option>
          <option value="US">US</option>
        </select>
    </div>
  );
};

export default LanguageSelector;
