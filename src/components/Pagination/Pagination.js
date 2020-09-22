import React from 'react';
import cn from 'classnames';
import { setPage } from '../../redux/currentPage';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage } from '../../redux/store';


export const Pagination = ({ totalMovies }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage)
  
  const numbers = [];
  const lastPageNumber = Math.ceil(totalMovies / 10);
  
  const changePage = (page) => {
    dispatch(setPage(page));
  }
  
  for (let i = 1; i <= lastPageNumber; i++) {
    numbers.push(i);
  }

    return (
      <nav className="nav__pagination">
        <ul className="pagination pagination__list">
          <li className="pagination__item">
            <button
              className={cn(
                "pagination__button",
                "pagination__button--first",
                 {'button-disabled' : currentPage === 1}
              )}
              onClick={() =>  changePage(1)}
              disabled={currentPage === 1}
            >
            </button>
          </li>
          <li className="pagination__item">
            <button
              type="button"
              aria-label="Go left"
              className={cn(
                "pagination__button",
                "pagination__button--left",
                {'button-disabled' : currentPage === 1}
              )}
              onClick={() => changePage(currentPage - 1)}
            >
            </button>
          </li>
        
          {numbers.slice(currentPage > 4 ? currentPage - 4 : 0, currentPage + 3).map(number => (
             <li className="pagination__item"
                 key={number}
             >
               <button
                 onClick={() => {
                   changePage(number);
                   window.scrollTo(145, 150);
                 }}
                 className={cn({
                   'pagination__button': true,
                   'pagination__button--active': number === currentPage,
                 })}
               >
                 {number}
               </button>
             </li>
          ))}
          <li className="pagination__item">
            <button
              type="button"
              aria-label="Go right"
              className={cn(
                "pagination__button",
                "pagination__button--right",
                {'button-disabled' : currentPage === numbers.length}
              )}
              onClick={() => changePage(currentPage + 1)}
            >
            </button>
          </li>
          <li className="pagination__item">
            <button
              className={cn(
                "pagination__button",
                "pagination__button--last",
                {'button-disabled' : currentPage === numbers.length}
              )}
              onClick={() => changePage(lastPageNumber)}
            >
            </button>
          </li>
        </ul>
      </nav>
    )

}
