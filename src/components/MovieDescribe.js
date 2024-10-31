import React from 'react';
import {Typography} from "@mui/material";

const MovieDescribe = ({name, value}) => {

    const style = {
        fontSize: "18px",
        marginBottom: "10px"
    }

    return (
        <Typography style={style}>
            <span style={{fontWeight: '700', color: "#807a00"}}>{name}: </span><span>{value}</span>
        </Typography>
    );
};

export default MovieDescribe;