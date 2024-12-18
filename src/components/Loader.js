import React from 'react';
import {Box, CircularProgress} from "@mui/material";

const Loader = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <CircularProgress color="info" size={"200px"}/>
        </Box>
    );
};

export default Loader;