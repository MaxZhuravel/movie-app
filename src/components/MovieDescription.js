import React from 'react';
import MovieDescribeItem from "./MovieDescribeItem";
import {Box} from "@mui/material";

const MovieDescription = ({movie}) => {

    let ratings;
    if (movie.Ratings) {
        ratings = movie.Ratings.map(rating => {
            return (
                <span key={rating.Source}>{rating.Source}: {rating.Value}</span>
            );
        });
    }

    return (
        <Box sx={{borderRight:6, borderBottom:6, borderColor: "primary.light", boxShadow: 10, padding: 2}}>
            <MovieDescribeItem name={'Ratings'} value={ratings}/>
            <MovieDescribeItem name={'Release date'} value={movie.Released}/>
            <MovieDescribeItem name={'Rating: IMDB'} value={movie.imdbRating}/>
            <MovieDescribeItem name={'Country'} value={movie.Country}/>
            <MovieDescribeItem name={'Director'} value={movie.Director}/>
            <MovieDescribeItem name={'Writer'} value={movie.Writer}/>
            <MovieDescribeItem name={'Genre'} value={movie.Genre}/>
            <MovieDescribeItem name={'Rated'} value={movie.Rated}/>
            <MovieDescribeItem name={'Runtime'} value={movie.Runtime}/>
            <MovieDescribeItem name={'Actors'} value={movie.Actors}/>
            <MovieDescribeItem name={'Box Office'} value={movie.BoxOffice}/>
        </Box>
    );
};

export default MovieDescription;