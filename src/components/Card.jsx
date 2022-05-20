import React from 'react';
import { useNavigate  } from "react-router-dom";

const Card = ({article}) => {
    const navigation = useNavigate();
    const goToArticle = (id,slug) => {
        navigation(`/article/${id}/${slug}`);
    }
    return (
        <div className="card-info" onClick={() => goToArticle(article.id, article.slug)}>
                <div className="card-img">
                    {article.acf.image ?
                    (
                    <img src={article.acf.image} />
                    ) : null }
                </div>
                <div className="card-content">
                    <h3>{article.title.rendered}</h3>
                    <div className="card-excerpt" dangerouslySetInnerHTML={{__html: article.excerpt.rendered}}></div>
                </div>
        </div>  
    );
};

export default Card;