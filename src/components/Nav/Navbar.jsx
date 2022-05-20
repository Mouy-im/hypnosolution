import React from 'react';
import Burger from './Burger';

const Navbar = () => {
    return (
        <div className="navbar">
                <a className="logo" href="/">
                    <img src='https://admin.hypnosolution-accompagnement.com/wp-content/uploads/2022/05/hypnosolution_logo.png' alt='logo' />
                    <span className="slogan">
                        <span className="first-letter">H</span>ypno &&nbsp;
                        <span className="first-letter">S</span>olution 
                    </span>
                </a>
            <Burger />
        </div>
    );
};

export default Navbar;