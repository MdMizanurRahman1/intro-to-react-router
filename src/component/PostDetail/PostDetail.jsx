import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const { id, title, useId, body } = post;

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Details about your post of: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;