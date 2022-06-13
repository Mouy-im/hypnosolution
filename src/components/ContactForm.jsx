import React, { useState,useRef  } from 'react';
import emailjs from '@emailjs/browser';
import ReCaptchaV2 from 'react-google-recaptcha';
const ContactForm = ({t}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [recaptcha, setRecaptcha] = useState(false);
    const [errorRecaptcha, setErrorRecaptcha] = useState('');
    const [token, setToken] = useState(null);
    const form = useRef();
    const reRef = useRef();
    const recaptchaError = () => {
        if (errorRecaptcha === 'error') {
            return {__html: 'Veuillez valider le recaptcha'};
        } else {
            return {__html: ''};
        }
        
    }
    /*const [token, setToken ] = useState();
    const [expire, setExpire] = useState(false);*/
    
    const handleOnChange = (value) => {
        setRecaptcha(true);
        console.log(value);
        setToken(value);
        /*verifyToken(value);*/
    }
    /*const verifyToken = (token) => {
        const secret = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;
        fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        {
            method: "POST",
        }).then((res) => console.log(res.json()));
         
    }*/
    const sendEmail = (e) => {
        e.preventDefault();
        if(!isValidEmail(email)) {
            return;
        }
        if (token === null) {
            return;
        }
        if (name && email && message ) {
            const serviceId = 'service_2jlo4sh';
            const templateId = 'template_xmjndth';
            const userId = '1rMOZ3etH86FYIoVd';
           
            emailjs.sendForm(serviceId, templateId, form.current, userId)
                .then(({ status }) => {
                    console.log("EMAILJS SENT", status.code);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSubject('');
                    setEmailSent(true);
                }, (err) => {
                    console.log("EMAILJS ERROR", err);
                    setEmailSent(false);
                    setErrorRecaptcha('error');
                });
        } else {
            alert(t('Please fill in all fields'));
        }
    }
    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    return (
        <div className='contactForm'>
            <h3>{t('Contact form')}</h3>
            <form 
                ref={form}
                onSubmit={(e) => sendEmail(e)}
            >
               { !emailSent ? (
                <>
                    <div className="form-field">
                        <label htmlFor="name">{t('Your Name')} : <span className='required'>*</span></label>
                        <input type="text" name="name"  value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">{t('Your Email')} : <span className='required'>*</span></label>
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="subject">{t('Subject')} :<span className='required'>*</span></label>
                        <select value={subject} name="subject" onChange={e => setSubject(e.target.value)} required >
                            <option value="" disabled>{t('--- Select a subject ---')}</option>
                            <option value="rdv">{t('Appointment')}</option>
                            <option value="informations">{t('Information request')}</option>
                            <option value="other">{t('Other')}</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="message">{t('Message')} : <span className='required'>*</span></label>
                        <textarea name="message" rows="10" value={message} onChange={e => setMessage(e.target.value)} required ></textarea>
                    </div>
                    <ReCaptchaV2 
                        className='recaptcha-form'
                        sitekey={process.env.REACT_APP_NEXT_PUBLIC_RECAPTCHA_SITE_KEY} 
                        ref={reRef}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <p className='error' dangerouslySetInnerHTML={recaptchaError()}></p>
                    <button disabled={!recaptcha || token == null} className='button' type="submit">{t('Send')}</button>
                </>
                ) : ( 
                <span className={emailSent ? 'd-block' : 'd-none'}>{t('Thank you for your message, we will be in touch in no time!')}</span> 
                )}
            </form>
        </div>
    );
};

export default ContactForm;