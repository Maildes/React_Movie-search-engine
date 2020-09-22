const SET_FILTER = 'SET_FILTER';

export const setFilter = query => ({ type: SET_FILTER, query });

const filterReducer = (query = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.query;
      
    default:
      return query;
  }
};

export default filterReducer;
