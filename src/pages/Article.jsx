import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArticleService from '../services/ArticleService';
import EurotophobieForm from '../components/EurotophobieForm';
import CommentForm from '../components/CommentForm';
import DisplayComments from '../components/DisplayComments';

const Article = ({t, i18n}) => {
    const [article, setArticle] = useState();
    const params = useParams();
    const [lang, setLang] = useState(i18n.language); 

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
                    <Link className="back" to="/articles">← {t('Back to posts')}</Link>
                    <h2 className="big-title">{lang === 'fr' || lang === 'fr-FR'  ? article.title.rendered : article.acf.traduction_titre}</h2>
                    <div className="resume">
                    <p dangerouslySetInnerHTML={lang === 'fr' || lang === 'fr-FR'  ? {__html:article.content.rendered} : {__html:article.acf.traduction_contenu}}></p>
                    </div>
                    <div className="more">
                    {article.acf.url_pour_approfondir ? (
                        <p className="ref_url">{t('Article to deepen your knowledge about this disease')} : <a target="_blank" href={article.acf.url_pour_approfondir} rel="noreferrer">{t('See the article')}</a>
                        </p>
                    ) : ( 
                    <></>
                    )}
                    
                
                    {article.acf.livre &&  article.acf.auteurs? (
                        <p className="book">{t('Book')} <b>{article.acf.livre}</b> <i>{t('writting by')} {article.acf.auteurs}</i></p>
                    ) : ( 
                    <></>
                    )}
                    </div>
                        
                    {params.id == 11 ? (
                        <EurotophobieForm t={t} />
                    ) : (
                        <></>
                    )}
                
                </main>
                <CommentForm article={article} t={t} />
                <DisplayComments article={article} t={t} i18n={i18n} />
            </>
            ) : ( 
                <></>
            )
            }
        </div>
    );
};

export default Article;