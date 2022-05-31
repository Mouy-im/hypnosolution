import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import ArticleService from '../services/ArticleService';

const Articles = ({t,i18n}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        ArticleService.getArticles().then((datas) => setArticles(datas));
   }, []);

   
    return (
        <div>
            <Header title='hypnosolution-banniere-articles'/>
            
            <main>
                <h2 className="big-title">{t('posts')}</h2>
                <div className="card-container">
                    {articles
                    .map((article) => { 
                        return (
                            article.categories == 22 ? (
                                <Card article={article} key={article.id} t={t} i18n={i18n} />
                        ) : ( <></>)
                        )
                    })}
                </div>
            </main>
            
        </div>
    );
};

export default Articles;