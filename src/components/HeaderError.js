import React from 'react';
import {Alert} from "@mui/material";

const HeaderError = ({error}) => {

    console.log(error);

    return (
        <Alert sx={{m:1}} severity="error">{error}</Alert>
    );
};

export default HeaderError;