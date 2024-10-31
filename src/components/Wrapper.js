import React from 'react';
import {Box} from "@mui/material";

const Wrapper = ({children}) => {
    return (
        <Box sx={{background: "linear-gradient(60deg, rgba(0,83,128,1) 0%, rgba(128,0,32,1) 100%)", width: "100%", minHeight: "100vh"}}>
            {children}
        </Box>
    );
};

export default Wrapper;