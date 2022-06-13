import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  ru: { nativeName: 'Russian' },
  fr: { nativeName: 'French' }
};


const Lang = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    
    return (
      
        <div className="lang-menu" onClick={() => setOpen(!open)} >
            <img className="current" width="30" src={`https://admin.hypnosolution-accompagnement.com/wp-content/uploads/2022/05/${i18n.resolvedLanguage}.jpg`} />
            <FontAwesomeIcon className={ open ? 'show' :  'hide' } icon={ faChevronDown }/>
            <div className={ "lang " + (open ? 'openMenu' : 'closeMenu')} open={open} >
                {Object.keys(lngs).map((lng) => (
                    <div key={lng}>
                        <img style={{ display: i18n.resolvedLanguage === lng ? 'none' : 'block' }} width="30" src={`https://admin.hypnosolution-accompagnement.com/wp-content/uploads/2022/05/${lng}.jpg`} onClick={() => { setOpen(!open);i18n.changeLanguage(lng) }} />
                    </div>
                ))}
            </div>
        </div>
      
    )
}
 
export default Lang;