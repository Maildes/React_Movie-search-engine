const SET_ERROR = 'SET_ERROR';

export const setError = errorMassage => ({ type: SET_ERROR, errorMassage });

const errorReducer = (error = '', action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.errorMassage;
    
    default:
      return error;
  }
};

export default errorReducer;
