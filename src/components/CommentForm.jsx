import React from 'react';

const CommentForm = ({article, t}) => {
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
            <h3>{t('Leave a comment...')}</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="hidden" id="postId" value={article.id} />
                <div className="form-field">
                    <label htmlFor="name">{t('Name')}<span className='required'>*</span></label>
                    <input id="name" type="text" required />
                </div>
                <div className="form-field">
                    <label htmlFor="email">{t('Email')}<span className='required'>*</span></label>
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
                    required
                    />
                </div>
                <button className="button" type="submit">{t('Send Comment')}</button>
            </form>
        </div>
    );
};

export default CommentForm;