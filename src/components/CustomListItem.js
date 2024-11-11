import React from 'react';
import {ListItem} from "@mui/material";

const CustomListItem = ({children, ...props}) => {

    const style = {
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: '1rem',
        color: '#dbdbdb',
        padding: 0,
    }

    return (
        <ListItem sx={{borderRight: 3, borderBottom: 3, borderColor: "primary.light", boxShadow: 10,}} style={style} {...props}>
            {children}
        </ListItem>
    );
};

export default CustomListItem;