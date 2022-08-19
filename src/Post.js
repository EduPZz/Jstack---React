import React from "react";
import propTypes from 'prop-types';

function Post(props){
    return(
        <>
            <article >
                <h1>{props.post.title}</h1>
                <small>{props.post.subtitle}</small>
            </article>
            <br />
            Media: {props.likes / 2}
        </>
    )
}

Post.propTypes = {
    likes: propTypes.number.isRequired,
    post: propTypes.shape({
        title: propTypes.string.isRequired,
        subtitle: propTypes.string.isRequired
    }).isRequired
};

export default Post;