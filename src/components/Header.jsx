import React from 'react';

const Header = (page) => {
    return (
        <div className="header">
            <img src={`./img/${page.title}.jpg`} alt={page.title} /> 
        </div>
    );
};

export default Header;