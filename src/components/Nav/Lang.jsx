import React, { useState } from "react";
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  ru: { nativeName: 'Russian' },
  fr: { nativeName: 'French' }
};

const Lang = () => {
    const { i18n } = useTranslation();
 
    return (
        <div className="lang">
                {Object.keys(lngs).map((lng) => (
                    <div key={lng}>
                        <img style={{ display: i18n.resolvedLanguage === lng ? 'none' : 'block' }} width="30" src={`https://admin.hypnosolution-accompagnement.com/wp-content/uploads/2022/05/${lng}.jpg`} onClick={() => i18n.changeLanguage(lng)} />
                    </div>
                ))}
        </div>
    )
}
 
export default Lang;