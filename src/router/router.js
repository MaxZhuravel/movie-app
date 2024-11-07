import SearchPage from "../pages/SearchPage";
import MainList from "../pages/MainList";
import Movie from "../pages/Movie";

export const router = [
    {
        path: '/',
        element: <SearchPage/>
    },
    {
        path: '/list/:movie',
        element: <MainList/>
    },
    {
        path: '/list/:movie/:id',
        element: <Movie/>
    }
];