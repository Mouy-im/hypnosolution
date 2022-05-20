import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t, i18n } = useTranslation();
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