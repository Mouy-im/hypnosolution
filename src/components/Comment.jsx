import React from 'react';

const Comment = ({comment, t}) => {
    return (
        <div className='comment'>
            <h3>{comment.id}</h3>
            <p>{comment.author_name}</p>
            <p>{comment.date}</p>
            <p dangerouslySetInnerHTML={{__html:comment.content.rendered}}></p>
        </div>
    );
};

export default Comment;