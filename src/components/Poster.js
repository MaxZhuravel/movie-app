import React from 'react';
import {Box} from "@mui/material";

const Poster = ({path}) => {
    return (
        <Box sx={{" img": {boxShadow: 10}}}>
            <img src={path} style={{width: '100%'}} alt="Poster image"/>
        </Box>
    );
};

export default Poster;