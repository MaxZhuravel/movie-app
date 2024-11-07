class MovieService {

    getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        console.log(res);
        return await res.json();
    }

    getMovieList = async (movie) => {
        const res = await this.getResource(`https://www.omdbapi.com/?s=${movie}&apikey=9282a34`);
        console.log(res);
        if (res.Error) throw res.Error;
        return res.Search;
    }

    getMovie = async (id) => {
        const movie = await this.getResource(`https://www.omdbapi.com/?apikey=9282a34&plot=full&i=${id}`);
        return movie;
    }

}

export default MovieService;