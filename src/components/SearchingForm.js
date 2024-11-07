import React, {useState} from 'react';
import {FormControl, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchingForm = ({searchMovie, setError}) => {

    const [query, setQuery] = useState('');

    const validateForm = (e) => {
        e.preventDefault();
        if (query.length < 3) {
            setError("Please, input 3 symbols as minimum")
        } else searchMovie(query);
    }

    const handleInput = (value) => {
        setQuery(value);
    }

    return (
        <form onSubmit={(e) => {validateForm(e)}}>
            <FormControl sx={{m: 1, width: '500px'}} variant="outlined">
                <OutlinedInput
                    sx={{
                        bgcolor: "#dbdbdb"
                    }}
                    id='film-name'
                    type='text'
                    placeholder='Input film or serial'
                    onChange={(e) => handleInput(e.target.value)}
                    fullWidth={true}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={(e) => {validateForm(e)}}>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
    );
};

export default SearchingForm;