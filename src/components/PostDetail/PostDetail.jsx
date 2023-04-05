import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const {id, title, useId, body} = post;
    const navigate= useNavigate();

    const handleGoBack =()=>{
        navigate(-1)

    }
    return (
        <div>
            <h3>Details about your post</h3>
        <h5>Details about your post of: {id}</h5>
        <h5>Title: {title}</h5>
        <p><small>Body: {body}</small></p>
        <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;