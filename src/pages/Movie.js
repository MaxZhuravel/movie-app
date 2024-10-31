import React, {useEffect, useState} from 'react';
import MovieService from "../service/MovieService";
import {useParams} from "react-router-dom";
import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import MovieDescribe from "../components/MovieDescribe";
import Loader from "../components/Loader";

const Movie = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const service = new MovieService();
    const {id} = useParams();
    const query = id.slice(1);

    useEffect(() => {
        onRequest(query);
    }, []);

    const onRequest = async (query) => {
        try {
            const movie = await service.getMovie(query);
            console.log(movie);
            setMovie(movie);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    let ratings;
    if (movie.Ratings) {
        ratings = movie.Ratings.map(rating => {
            return (
                <span key={rating.Source}>{rating.Source}: {rating.Value}</span>
            );
        });
    }

    return (
        <>
        {loading
            ? <Loader/>
            : <Container sx={{mt: 5, color: "#dbdbdb"}}>
                <Grid sx={{mb: 8}} container spacing={5}>
                    <Grid item md={5}>
                        <img src={movie.Poster} style={{width: '100%'}}/>
                    </Grid>
                    <Grid item md={7}>
                        <Box sx={{borderRight:6, borderBottom:6, borderColor: "primary.light", mb: 8, boxShadow: 10, padding: 2}}>
                            <Typography variant={"h1"}>{movie.Title}</Typography>
                        </Box>
                        <Box sx={{borderRight:6, borderBottom:6, borderColor: "primary.light", boxShadow: 10, padding: 2}}>
                            <MovieDescribe name={'Ratings'} value={ratings}/>
                            <MovieDescribe name={'Release date'} value={movie.Released}/>
                            <MovieDescribe name={'Rating: IMDB'} value={movie.imdbRating}/>
                            <MovieDescribe name={'Country'} value={movie.Country}/>
                            <MovieDescribe name={'Director'} value={movie.Director}/>
                            <MovieDescribe name={'Writer'} value={movie.Writer}/>
                            <MovieDescribe name={'Genre'} value={movie.Genre}/>
                            <MovieDescribe name={'Rated'} value={movie.Rated}/>
                            <MovieDescribe name={'Runtime'} value={movie.Runtime}/>
                            <MovieDescribe name={'Actors'} value={movie.Actors}/>
                            <MovieDescribe name={'Box Office'} value={movie.BoxOffice}/>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{borderRight:6, borderTop:6, borderColor: "primary.light", boxShadow: 10, padding: 4, marginBottom: 2}}>
                        <Typography sx={{mb: 2}} variant={"h2"}>"{movie.Title}" is about:</Typography>
                        <Typography>{movie.Plot}</Typography>
                    </Box>
        </Container>}
        </>
    );
};

export default Movie;