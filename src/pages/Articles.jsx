import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import ArticleService from '../services/ArticleService';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        ArticleService.getArticles().then((datas) => setArticles(datas));
   }, []);

   
    return (
        <div>
            <Header title='hypnosolution-banniere-articles'/>
            <main>
                <h2 className="big-title">Les Articles</h2>
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