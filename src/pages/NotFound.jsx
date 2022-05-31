import React from 'react';

const NotFound = ({t}) => {
    return (
        <div className="notFound">
            <img src="./img/hypnosolution-404page.jpg" />
            <p>{t('page does not exist')}<br />{t('404 error')}</p>
        </div>
    );
};

export default NotFound;