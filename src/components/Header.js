import React, {useState} from 'react';
import {Box, Container, FormControl, IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({searchMovie}) => {

    const [query, setQuery] = useState('');


    return (
        <Box sx={{
            height: 100,
            width: '100%',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: '#dbdbdb'
        }}>
            <Container>
                <FormControl sx={{m: 1, width: '500px'}} variant="outlined">
                    <OutlinedInput
                        sx={{
                            bgcolor: "#dbdbdb"
                        }}
                        id='film-name'
                        type='text'
                        placeholder='Input film or serial'
                        onChange={(e) => setQuery(e.target.value)}
                        fullWidth={true}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={() => {searchMovie(query)}}>
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Container>
        </Box>
    );
};

export default Header;