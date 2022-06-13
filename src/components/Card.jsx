import { useNavigate  } from "react-router-dom";
import React, {useState, useEffect } from 'react';

const Card = ({article, t, i18n}) => {
    const navigation = useNavigate();
    const goToArticle = (id,slug) => {
        navigation(`/article/${id}/${slug}`);
    }
    const [lang, setLang] = useState(i18n.language);

    useEffect(() => {
        setLang(i18n.language);
    },[i18n.language]);

    return (
        <div className="card-info" onClick={() => goToArticle(article.id, article.slug)}>
                <div className="card-img">
                    {article.acf.image ?
                    (
                    <img src={article.acf.image} />
                    ) : null }
                </div>
                <div className="card-content">
                    <h3>{ lang === 'fr' || lang === 'fr-FR' ? article.title.rendered : article.acf.traduction_titre }</h3>
                    <div className="card-excerpt" dangerouslySetInnerHTML={ lang === 'fr' || lang === 'fr-FR' ? {__html: article.content.rendered} : {__html:article.acf.traduction_contenu}}></div>
                    <button class="button" onClick={() => goToArticle(article.id, article.slug)}>{t("See more")}</button>
                </div>
        </div>  
    );
};

export default Card;