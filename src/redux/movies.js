const SET_MOVIES = 'initMovies';
const SET_CLEAR_MOVIES = 'SET_CLEAR_MOVIES';

export const setMovies = movies => ({ type: SET_MOVIES, movies });
export const setClearMovies = () => ({ type: SET_CLEAR_MOVIES });

const moviesReducer = (movies = [], action) => {
    switch (action.type) {
        case SET_MOVIES:
            return action.movies;
        
        case SET_CLEAR_MOVIES:
            return [];

        default:
            return movies;
    }
};

export default moviesReducer;
