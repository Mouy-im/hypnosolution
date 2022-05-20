import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RightNav = ({open}) => {
    const { t, i18n } = useTranslation();
    return (
        <div className='right-nav'>
            <ul className={open ? 'openMenu' : 'closeMenu'} open={open} >
                <NavLink to='/'>{t('home')}</NavLink>
                <NavLink to='/articles'>{t('posts')}</NavLink>
                <NavLink to='#contact'>{t('contact')}</NavLink>
            </ul>
        </div>
    );
};

export default RightNav;