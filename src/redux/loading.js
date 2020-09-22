const SET_LOADING = 'SET_LOADING';

export const setLoading = (status) => ({ type: SET_LOADING, status });

const loadingReducer = (loading = false, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.status;
    
    default:
      return loading;
  }
};

export default loadingReducer;
