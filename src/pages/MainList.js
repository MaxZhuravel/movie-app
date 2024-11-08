import React, { useEffect, useState} from 'react';
import {Box, Container, List, ListItemButton,} from "@mui/material";
import CustomLink from "../components/CustomLink";
import CustomListItem from "../components/CustomListItem";
import {useNavigate, useParams} from "react-router-dom";
import MovieService from "../service/MovieService";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainList = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {movie} = useParams();
    const [query, setQuery] = useState(movie.slice(1));
    const navigate = useNavigate();

    const service = new MovieService();

    useEffect(() => {
        console.log(query);
        if (query.length < 3) {
            setError('short query')
        }
        onRequest(query);
        setLoading(true);
        navigate(`/list/:${query}`);
    }, [query]);

    const onRequest = async (query) => {
        try {
            const list = await service.getMovieList(query);
            console.log(list);
            setMovieList(list);
            setLoading(false);
            setError(null);
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
        <>
            <Header searchMovie={setQuery} error={error} setError={setError}/>
            <Container>
                {loading
                    ? <Loader/>
                    : <List sx={{bgcolor: "FFF"}}>
                        {renderList}
                    </List>
                }
            </Container>
            <Footer/>
        </>
    );
};

export default MainList;