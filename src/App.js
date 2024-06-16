import './App.css';
import {Box, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function App() {
    return (
        <div className="App">
            <Box sx={{
                bgcolor: '#FFF',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                p: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <FormControl sx={{m: 1, width: '500px'}} variant="outlined">
                    <OutlinedInput
                        id='film-name'
                        type='text'
                        placeholder='Input film or serial'
                        fullWidth={true}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
        </div>
    );
}

export default App;
