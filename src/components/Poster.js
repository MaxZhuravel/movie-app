import React from 'react';

const Poster = ({path}) => {
    return (
        <img src={path} style={{width: '100%'}}/>
    );
};

export default Poster;