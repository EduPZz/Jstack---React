import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';

export default function PostHeader (props){
    return(
        <>
            <h1>{props.post.read ? <s>{props.post.title}</s> : props.post.title}</h1>
            <small>{props.post.subtitle}</small>

            <Button onClick={() => props.onRemove(props.post.id)}>
                Remover
            </Button>

            <Button onClick={() => props.onRead(props.post.id)}>
                    Lido
            </Button>
        </>
    )
}

PostHeader.propTypes = {
    onRemove: propTypes.func.isRequired,
    post: propTypes.shape({
        id: propTypes.node.isRequired,
        title: propTypes.string.isRequired,
        subtitle: propTypes.string.isRequired,
        read: propTypes.bool.isRequired
    }).isRequired
};