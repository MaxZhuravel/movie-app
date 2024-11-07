import React from 'react';
import {Box, Typography} from "@mui/material";

const MovieTitle = ({title}) => {
    return (
        <Box sx={{borderRight:6, borderBottom:6, borderColor: "primary.light", mb: 8, boxShadow: 10, padding: 2}}>
            <Typography variant={"h1"}>{title}</Typography>
        </Box>
    );
};

export default MovieTitle;