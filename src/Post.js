import React from "react";
import propTypes from 'prop-types';

function Post(props){
    return(
        <>
            <article >
                <h1>{props.post.read ? <s>{props.post.title}</s> : props.post.title}</h1>
                <small>{props.post.subtitle}</small>
                <button onClick={() => props.onRemove(props.post.id)}>
                    Remover
                </button>
                <button onClick={() => props.onRead(props.post.id)}>
                    Lido
                </button>
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