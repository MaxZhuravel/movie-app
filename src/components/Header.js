import {Box, Container} from "@mui/material";
import SearchingForm from "./SearchingForm";
import HeaderError from "./HeaderError";

const Header = ({searchMovie, error, setError}) => {



    return (
        <Box sx={{
            minHeight: '120px',
            p: 2,
            display: "flex",
            alignItems: 'center',
            width: '100%',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: '#dbdbdb',
        }}>
            <Container>
                <SearchingForm searchMovie={searchMovie} setError={setError}/>
                {error && <HeaderError error={error}/>}
            </Container>
        </Box>
    );
};

export default Header;