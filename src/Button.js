import React from 'react';
import propTypes from 'prop-types';

export default function Button (props){
    return(
        <>
            <button onClick={props.onClick}>
                {props.children}
            </button>
        </>
    )
}

Button.propTypes = {
    children: propTypes.node.isRequired,
    onClick: propTypes.func.isRequired,
};