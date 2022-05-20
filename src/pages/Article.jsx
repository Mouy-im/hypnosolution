import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleService from '../services/ArticleService';

const Article = () => {
    const [article, setArticle] = useState();
    const params = useParams();
    console.log(params);

    useEffect(() => {
        ArticleService.getArticle(params.id).then((datas) => setArticle(datas));
   }, [params.id]);

   
    return (
        <div class="article">
            { article ? (
            <>
            <div className="header">
                {article.acf.image ?
                    (
                    <img src={article.acf.image} alt={params.slug}/>
                    ) : null }
            </div>
            <main>
                <h2 className="big-title">{article.title.rendered}</h2>
                <div class="resume">
                <p dangerouslySetInnerHTML={{__html:article.content.rendered}}></p>
                </div>
                <div class="more">
                {article.acf.url_pour_approfondir ? (
                    <p class="ref_url">Article pour approfondir ses connaissances au sujet de cette maladie : <a target="_blank" href={article.acf.url_pour_approfondir} rel="noreferrer">Voir l'article</a>
                    </p>
                ) : ( 
                <></>
                )}
                
               
                {article.acf.livre &&  article.acf.auteurs? (
                    <p class="book">Livre <b>{article.acf.livre}</b> <i>écrit par {article.acf.auteurs}</i></p>
                ) : ( 
                <></>
                )}
                </div>
                
            </main>
            </>
            ) : ( 
                <></>
            )
            }
        </div>
    );
};

export default Article;