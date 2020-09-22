const SET_MOVIE_ID = 'IMDB_ID';

export const setMovieId = imdbId => ({ type: SET_MOVIE_ID, imdbId });

const movieIdReducer = (id = '', action) => {
  switch (action.type) {
    case SET_MOVIE_ID:
      return action.imdbId;
    
    default:
      return id;
  }
};

export default movieIdReducer;
