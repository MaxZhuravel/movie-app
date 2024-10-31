import React from 'react';
import {Link} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {

    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "10px",
        width: '100%',
        color: "white",
        textDecoration: 'none',
        fontSize: 32,
    }

    return (
        <Link to={to} {...props} style={style}>
            {children}
        </Link>
    );
};

export default CustomLink;