import React from "react";
import propTypes from 'prop-types';

export default function Header(props){
    return(
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    )
}

Header.prototypes = {
    title: propTypes.string,
    children: propTypes.node
};

Header.defaultProps = {
    title: `Duardin's blog`,
};