import React from "react";
import propTypes from 'prop-types';
import { prototype } from "html-webpack-plugin";

function Post(props){
    return(
        <>
            <article >
                <h1>{props.post.title}</h1>
                <button onClick={() => props.onRemove(props.post.id)}>
                    Remover
                </button>
                <small>{props.post.subtitle}</small>
            </article>
            <br />
            Media: {props.likes / 2}
        </>
    )
}

Post.propTypes = {
    onRemove: propTypes.func.isRequired,
    likes: propTypes.number.isRequired,
    post: propTypes.shape({
        id: propTypes.node.isRequired,
        title: propTypes.string.isRequired,
        subtitle: propTypes.string.isRequired
    }).isRequired
};

export default Post;