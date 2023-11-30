import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from "react-flags-select";
import i18n from '../i18n'
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("US");

  useEffect(() => {
    if(selected === 'US'){
        i18n.changeLanguage('en')
    }
    else{
        i18n.changeLanguage('es')
    }
    
  },[i18n, selected]);

  return (
    <div>
        <ReactFlagsSelect className='language-selector' selected={selected} onSelect={(code) => setSelected(code)} countries={["US", "ES"]} />
    </div>
  );
};

export default LanguageSelector;
