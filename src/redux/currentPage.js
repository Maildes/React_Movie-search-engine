const SET_PAGE = 'SET_PAGE';

export const setPage = page => ({ type: SET_PAGE, page });

const currentPageReducer = (currentPage = 1, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    
    default:
      return currentPage;
  }
};

export default currentPageReducer;
