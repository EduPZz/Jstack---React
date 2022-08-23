import React from "react";
import propTypes from 'prop-types';

import PostHeader from "./PostHeader";

import Button from './Button';

function Post(props){
    return(
        <>
            <article >
                
                <PostHeader 
                    onRemove={props.onRemove}
                    post={{
                        id: props.post.id,
                        title: props.post.title,
                        subtitle: props.post.subtitle,
                        read: props.post.read
                    }}                   
                />
            </article>
            <br />
            Media: {props.post.likes / 2}
        </>
    )
}

Post.propTypes = {
    onRemove: propTypes.func.isRequired,
    post: propTypes.shape({
        id: propTypes.node.isRequired,
        title: propTypes.string.isRequired,
        subtitle: propTypes.string.isRequired,
        likes: propTypes.number.isRequired,
        read: propTypes.bool.isRequired
    }).isRequired
};

export default Post;