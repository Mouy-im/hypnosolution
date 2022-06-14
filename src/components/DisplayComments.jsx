import React, { useEffect, useState } from 'react';
import ArticleService from '../services/ArticleService';
import Comment from './Comment';

const DisplayComments = ({article, t, i18n}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        ArticleService.getComments(article.id).then((comments) => setComments(comments));
    },[]);
    return (
        <div className='comments'>
            {comments.length > 0 ? <h3>{t('Comments')}</h3> : <></> }
            {comments.map((comment) => {
                return (
                    <Comment comment={comment} t={t} i18n={i18n} />
                )
            })}
        </div>
    );
};

export default DisplayComments;