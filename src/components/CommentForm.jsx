import React, { useState } from 'react';

const CommentForm = ({article, t}) => {
    const [sentComment, setSentComment] = useState(false);
    console.log(sentComment);
    const handleSubmit = (e) => {
        e.preventDefault();
        const [postId, name, email, comment] = e.target.elements;
        console.log(e.target.elements);
        const data = JSON.stringify({
            post: postId.value,
            author_name: name.value,
            author_email: email.value,
            content: comment.value,
        });
    
        fetch("https://admin.hypnosolution-accompagnement.com/wp-json/wp/v2/comments", {
            method: 'post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: data,
        })
        .then((response) => {
            if (response.ok === true) {
                // Submitted successfully!
                postId.value = '';
                name.value = '';
                email.value = '';
                comment.value = '';
                setSentComment(true);
            }
        return response.json();
        })
        .then((object) => {
        // Comment submission failed.
        // Output `object.message` to see the error message.
        })
        .catch(error => console.error('Error:', error));
    }
    return (
        <div className='commentForm'>
            <h3>{t('Leave your comment')} !</h3>
            {!sentComment ? (
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="hidden" id="postId" value={article.id} />
                <div className="form-field">
                    <label htmlFor="name">{t('Your Name')}<span className='required'>*</span></label>
                    <input id="name" type="text" required />
                </div>
                <div className="form-field">
                    <label htmlFor="email">{t('Your Email')}<span className='required'>*</span></label>
                    <input
                    id="email"
                    type="email"
                    required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="comment">{t('Comment')}<span className='required'>*</span></label>
                    <textarea
                    id="comment"
                    rows="5"
                    required
                    />
                </div>
                <button className="button" type="submit">{t('Publish')}</button>
            </form>
            ) : (
            <>{t('Your comment will be published shortly after validation')} !</>
            )}
        </div>
    );
};

export default CommentForm;