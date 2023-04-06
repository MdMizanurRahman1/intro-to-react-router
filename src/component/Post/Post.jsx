import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, body, title } = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }


    return (
        <div className='post'>
            <h5>Id: {id}</h5>
            <h5>Title: {title}</h5>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
            <button onClick={handleNavigate}>Navigate</button>
        </div>
    );
};

export default Post;