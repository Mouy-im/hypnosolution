import React, { useState } from 'react';
//import RightNav from './RightNav';
import { NavLink } from 'react-router-dom';
import Lang from './Lang';
import { useTranslation } from 'react-i18next';

const Burger = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={"burger " + (open ? 'openMenu' : 'closeMenu')} open={open} onClick={() => setOpen(!open)} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='right-nav'>
                <ul className= {"menu " + (open ? 'openMenu' : 'closeMenu')} open={open} >
                    <NavLink onClick={() => setOpen(!open)} to='/'>{t('home')}</NavLink>
                    <NavLink onClick={() => setOpen(!open)} to='/articles'>{t('posts')}</NavLink>
                    <NavLink onClick={() => setOpen(!open)} to='#contact'>{t('contact')}</NavLink>
                    <Lang />
                </ul>
            </div>
        </>
    );
};

export default Burger;