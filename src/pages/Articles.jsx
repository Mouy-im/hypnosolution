import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import ArticleService from '../services/ArticleService';
import { useTranslation } from 'react-i18next';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        ArticleService.getArticles().then((datas) => setArticles(datas));
   }, []);

   
    return (
        <div>
            <Header title='hypnosolution-banniere-articles'/>
            <main>
                <h2 className="big-title">{t('posts')}</h2>
                <div className="card-container">
                    {articles.map((article) => {
                        return (
                            <Card article={article}  key={article.id} />
                        )
                    })}
                </div>
            </main>
        </div>
    );
};

export default Articles;