import React from 'react';
import {FormControl, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchingForm = ({setQuery, query, searchMovie}) => {
    return (
        <form onSubmit={() => {searchMovie(query)}}>
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
                            <IconButton onClick={() => {
                                searchMovie(query)
                            }}>
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