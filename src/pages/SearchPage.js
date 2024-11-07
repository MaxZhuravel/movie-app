import React from 'react';
import {Box, FormControl, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate} from "react-router-dom";

const SearchPage = () => {

    const [query, setQuery] = React.useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('1');
        navigate(`list/:${query}`);
    }

    return (
            <Box sx={{
                background: "#FFFFFF",
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                p: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{m: 1, width: '500px'}} variant="outlined">
                        <OutlinedInput
                            id='film-name'
                            type='text'
                            placeholder='Input film or serial'
                            onChange={(e) => setQuery(e.target.value)}
                            fullWidth={true}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleSubmit}>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </form>
            </Box>
    );
};

export default SearchPage;