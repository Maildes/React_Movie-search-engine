import { createStore, combineReducers } from 'redux';
import moviesReducer from './movies';
import detailsReducer from './details';
import loadingReducer from './loading';
import errorReducer from './error';
import filterReducer from './filter';
import currentPageReducer from './currentPage';
import historyReducer from './historySearch'
import movieIdReducer from './movieImdb'

// Selector
export const getMovies = state => state.movies;
export const getDetails = state => state.details;
export const getLoading = state => state.loading;
export const getError = state => state.error;
export const getFilter = state => state.query;
export const getCurrentPage = state => state.currentPage;
export const getHistorySearch = state => state.historySearch;
export const getMovieId = state => state.id;

const rootReducer = combineReducers({
    movies: moviesReducer,
    details: detailsReducer,
    loading: loadingReducer,
    error: errorReducer,
    query: filterReducer,
    currentPage: currentPageReducer,
    historySearch: historyReducer,
    id: movieIdReducer,
});

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') || '')
  : {};

const store = createStore(
  rootReducer,
  persistedState,
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
