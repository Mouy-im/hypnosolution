import React from 'react';
import Header from '../components/Header';


const Home = ({t}) => {
    return (
        <div className='home'>
            <Header title='hypnosolution-banniere-accueil'/>
            <main>
                <h2>{t('home')}</h2>
            </main>
        </div>
    );
};

export default Home;