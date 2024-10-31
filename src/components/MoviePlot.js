import React from 'react';
import {Box, Typography} from "@mui/material";

const MoviePlot = ({title, plot}) => {
    return (
        <Box sx={{borderRight:6, borderTop:6, borderColor: "primary.light", boxShadow: 10, padding: 4, marginBottom: 2}}>
            <Typography sx={{mb: 2}} variant={"h2"}>"{title}" is about:</Typography>
            <Typography>{plot}</Typography>
        </Box>
    );
};

export default MoviePlot;