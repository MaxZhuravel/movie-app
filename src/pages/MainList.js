import React, { useEffect, useState} from 'react';
import {
    Box,
    ButtonBase,
    CircularProgress,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";
import CustomLink from "../components/CustomLink";
import CustomListItem from "../components/CustomListItem";
import {useParams} from "react-router-dom";
import MovieService from "../service/MovieService";

const MainList = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {movie} = useParams();
    const query = movie.slice(1);

    const service = new MovieService();

    useEffect(() => {
        onRequest(query);
    }, []);

    const onRequest = async (query) => {
        try {
            const list = await service.getMovieList(query);
            console.log(list);
            setMovieList(list);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    const loader =
        <Box sx={{
            display: 'flex',
            height: "100vh",
            justifyContent: 'center',
            alignItems: 'center'}}>
            <CircularProgress color="info" size={"200px"}/>
        </Box>

    const renderList = movieList.map((movie) => {
        return (
            <CustomListItem key={movie.Title} width={'100%'}>
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
        <Container>
            {loading
                ? loader
                : <List sx={{bgcolor: "FFF"}}>
                    {renderList}
                </List>
            }
        </Container>
    );
};

export default MainList;