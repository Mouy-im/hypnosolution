import React, { useEffect, useState } from 'react';
import ArticleService from '../services/ArticleService';
import Comment from './Comment';

const DisplayComments = ({article, t}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        ArticleService.getComments(article.id).then((comments) => setComments(comments));
    },[]);
    return (
        <div>{comments ? <h3>{t('Comments')}</h3> : <></> }
            {comments.map((comment) => {
                    return (
                        <Comment comment={comment} t={t} />
                    )})}
        </div>
    );
};

export default DisplayComments;