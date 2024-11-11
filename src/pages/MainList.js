import React, { useEffect, useState} from 'react';
import {Box, Container, List, ListItemButton,} from "@mui/material";
import CustomLink from "../components/CustomLink";
import CustomListItem from "../components/CustomListItem";
import {useNavigate, useParams} from "react-router-dom";
import MovieService from "../service/MovieService";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../components/Error";

const MainList = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [headerError, setHeaderError] = useState("");
    const {movie} = useParams();
    const [query, setQuery] = useState(movie.slice(1));
    const navigate = useNavigate();

    const service = new MovieService();

    useEffect(() => {
        onRequest(query);
        setLoading(true);
        navigate(`/list/:${query}`);
    }, [query]);

    const onRequest = async (query) => {
        try {
            const res = await service.getMovieList(query);
            setError(null);
            if (res.Response === 'False') {
                setHeaderError(res.Error);
            } else {
                setMovieList(res.Search);
                setLoading(false);
                setHeaderError('');
            }

        }
        catch (error) {
            console.log(error);
            setError(error);
        }
    }

    const renderList = movieList.map((movie) => {
        return (
            <CustomListItem key={movie.imdbId} width={'100%'}>
                <ListItemButton>
                    <CustomLink to={`:${movie.imdbID}`}>
                        <Box>{movie.Title}</Box>
                        <Box width={100}>
                            <img src={movie.Poster} style={{width: '100%'}}/>
                        </Box>
                    </CustomLink>
                </ListItemButton>
            </CustomListItem>
        );
    });

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}}>
            <Header searchMovie={setQuery} error={headerError} setError={setHeaderError}/>
            <Container>
                {error ? <Error/> : loading ? <Loader/>
                    : <List sx={{bgcolor: "FFF"}}>
                        {renderList}
                    </List>
                }
            </Container>
            <Footer/>
        </Box>
    );
};

export default MainList;