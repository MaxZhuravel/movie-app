import React, {useEffect, useState} from 'react';
import MovieService from "../service/MovieService";
import {useParams} from "react-router-dom";
import {Container, Grid} from "@mui/material";
import Loader from "../components/Loader";
import MoviePlot from "../components/MoviePlot";
import MovieDescription from "../components/MovieDescription";
import MovieTitle from "../components/MovieTitle";
import Poster from "../components/Poster";

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

    return (
        <>
        {loading
            ? <Loader/>
            : <Container sx={{mt: 5, color: "#dbdbdb"}}>
                <Grid sx={{mb: 8}} container spacing={5}>
                    <Grid item md={5}>
                        <Poster path={movie.Poster}/>
                    </Grid>
                    <Grid item md={7}>
                        <MovieTitle title={movie.Title}/>
                        <MovieDescription movie={movie}/>
                    </Grid>
                </Grid>
                <MoviePlot title={movie.Title} plot={movie.Plot}/>
            </Container>}
        </>
    );
};

export default Movie;