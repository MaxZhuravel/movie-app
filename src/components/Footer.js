import React from 'react';
import {Box, Container} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{
            height: '60px',
            display: "flex",
            alignItems: 'center',
            width: '100%',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: '#dbdbdb',
            " span": {color: 'primary.light'},
            fontWeight: 'bold',
        }}>
            <Container sx={{textAlign: 'center'}}>
                creating by <span>Max Zhuravel</span>
            </Container>
        </Box>
    );
};

export default Footer;