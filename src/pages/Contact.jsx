import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

const Contact = ({t}) => {
   
    return (
        <div className='contact'>
            <Header title='hypnosolution-banniere-contact'/>
            <main>
                <h2 className="big-title">{t('contact')}</h2>
                <div className='presentation'>
                    <div className='presentation-img'>
                        <img src="//admin.hypnosolution-accompagnement.com/wp-content/uploads/2022/06/portrait_carre.jpg" alt="portrait"></img>
                    </div>
                    <div className='presentation-description'>
                      <p>{t('presentation')}</p>  
                    </div>
                    
                </div>
                <ContactForm t={t} />
            </main>
        </div>
    );
};

export default Contact;