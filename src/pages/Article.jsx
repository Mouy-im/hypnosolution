import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleService from '../services/ArticleService';
import EurotophobieForm from '../components/EurotophobieForm';

const Article = ({t, i18n}) => {
    const [article, setArticle] = useState();
    const params = useParams();
    const [lang, setLang] = useState();

    useEffect(() => {
        setLang(i18n.language);
    },[i18n.language]);

    useEffect(() => {
        ArticleService.getArticle(params.id).then((datas) => setArticle(datas)).then(() => console.log(article))
   }, [params.id]);
   
    return (
        <div className="article">
            { article ? (
            <>
            <div className="header">
                {article.acf.image ?
                    (
                    <img src={article.acf.image} alt={params.slug}/>
                    ) : null }
            </div>
            <main>
                <h2 className="big-title">{lang === 'fr' ? article.title.rendered : article.acf.traduction_titre}</h2>
                <div className="resume">
                <p dangerouslySetInnerHTML={lang === 'fr' ? {__html:article.content.rendered} : {__html:article.acf.traduction_contenu}}></p>
                </div>
                <div className="more">
                {article.acf.url_pour_approfondir ? (
                    <p className="ref_url">{t('Article to deepen your knowledge about this disease')} : <a target="_blank" href={article.acf.url_pour_approfondir} rel="noreferrer">{t('See the article')}</a>
                    </p>
                ) : ( 
                <></>
                )}
                
               
                {article.acf.livre &&  article.acf.auteurs? (
                    <p className="book">Livre <b>{article.acf.livre}</b> <i>écrit par {article.acf.auteurs}</i></p>
                ) : ( 
                <></>
                )}
                </div>
                    
                {params.id == 11 ? (
                    <EurotophobieForm />
                ) : (
                    <></>
                )}
              
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