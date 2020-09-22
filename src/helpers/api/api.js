const API = `https://www.omdbapi.com/`;
const API_KEY = '8a5fc427';

export const getMovies = async(movie, page) => {
    const movies = await fetch(`${API}?s=${movie}&page=${page}&apikey=${API_KEY}`)

    return movies.json();
};


export const getMoviesDetails = async(id) => {
    const movie = await fetch(`${API}?i=${id}&plot=full&apikey=${API_KEY}`)
    
    return movie.json();
}
