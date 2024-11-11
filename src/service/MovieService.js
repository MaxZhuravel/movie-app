class MovieService {

    getResource = async (url) => {
        const res = await fetch(url);
        console.log(res);
        if (!res.ok) {
            throw new Error(res.status);
        }

        return await res.json();
    }

    getMovieList = async (movie) => {
        const res = await this.getResource(`https://www.omdbapi.com/?s=${movie}&apikey=9282a34`);
        console.log(res);
        return res;
    }

    /*getMovieList = async (movie) => {
        const res = await this.getResource(`https://www.omdbapi.com/?s=${movie}&apikey=9282a34`);
        if (res.Response === 'True') return res.Search;
        return res.Search;
    }*/

    getMovie = async (id) => {
        const movie = await this.getResource(`https://www.omdbapi.com/?apikey=9282a34&plot=full&i=${id}`);
        return movie;
    }

}

export default MovieService;