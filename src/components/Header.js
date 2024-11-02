import React, {useState} from 'react';
import {Box, Container} from "@mui/material";
import SearchingForm from "./SearchingForm";

const Header = ({searchMovie}) => {

    const [query, setQuery] = useState('');


    return (
        <Box sx={{
            height: '120px',
            display: "flex",
            alignItems: 'center',
            width: '100%',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: '#dbdbdb',
        }}>
            <Container>
                <SearchingForm setQuery={setQuery} query={query} searchMovie={searchMovie}/>
            </Container>
        </Box>
    );
};

export default Header;