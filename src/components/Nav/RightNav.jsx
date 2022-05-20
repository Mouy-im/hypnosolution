import React from 'react';
import { NavLink } from 'react-router-dom';

const RightNav = ({open}) => {
    return (
        <div className='right-nav'>
            <ul className={open ? 'openMenu' : 'closeMenu'} open={open} >
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/articles'>Articles</NavLink>
                <NavLink to='#contact'>Contact</NavLink>
            </ul>
        </div>
    );
};

export default RightNav;