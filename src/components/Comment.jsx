import React from 'react';

const Comment = ({comment, t, i18n}) => {
    const dateParser = (date) =>{
        let newDate = new Date(date).toLocaleDateString(i18n.language, {
            year: "numeric",
            month:"long",
            day:"numeric",
            hour:"numeric",
            minute:"numeric",
            second:"numeric",
        });
        return newDate;
    }
    return (
        <div className='comment'>
            <h5>{t('Comment of')} {comment.author_name} {t('at')} {dateParser(comment.date)}</h5>
            <p dangerouslySetInnerHTML={{__html:comment.content.rendered}}></p>
        </div>
    );
};

export default Comment;