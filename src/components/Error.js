import React from 'react';
import {Box, Container} from "@mui/material";

const Error = () => {
    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', height: '300px', border: 3, borderColor: "primary.light", boxShadow: 10}}>
                <img src="/img/falling-star-wars.gif" alt=""/>
            </Box>
        </Container>
    );
};

export default Error;