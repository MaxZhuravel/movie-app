import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const MovieHeader = () => {
    return (
        <Box sx={{
            minHeight: '30px',
            p: 2,
            display: "flex",
            alignItems: 'center',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: '#dbdbdb',
        }}>
            <Container sx={{textAlign: 'center'}}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'Bold', color: "#807a00" }}>Movie-App</Typography>
            </Container>
        </Box>
    );
};

export default MovieHeader;