const SET_SEARCH_MOVIE = 'SET_SEARCH_MOVIE';
const CLEAR = 'CLEAR';
const REFRESH = 'REFRESH';

export const setNewSearchMovie = (query) => ({ type: SET_SEARCH_MOVIE, query });
export const clearSearchMovie = () => ({ type: CLEAR});
export const refreshSearchMovie = (query) => ({ type: REFRESH, query });

const historyReducer = (historySearch = [], action) => {
  switch (action.type) {
    case SET_SEARCH_MOVIE:
      return [...historySearch, action.query];
      
    case  CLEAR:
      return [];
      
    case REFRESH:
      return [...historySearch.slice(historySearch.length - 1), action.query];
    
    default:
      return historySearch;
  }
};

export default historyReducer;
