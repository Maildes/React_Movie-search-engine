import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './HistorySearch.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getHistorySearch } from '../../redux/store';
import { refreshSearchMovie } from '../../redux/historySearch';
import { setFilter } from '../../redux/filter';
import { setPage } from '../../redux/currentPage';


export const HistorySearch = ({ handleClear, setErrorNotice }) => {
  const dispatch = useDispatch();
  const history = useSelector(getHistorySearch);
  
  useEffect(() => {
    if(history.length > 10) {
      dispatch(refreshSearchMovie())
    }
  }, [history])
  

  return (
    <>
      {history.length > 0 &&
        <div className="history">
          <button
            className="history__clear"
            onClick={() => {
              handleClear()
            }}
          >
            Clear
          </button>
          <ul className="history__list">
            <li className="history__item--title">
              <p className="history__title">
                Search history:
              </p>
            </li>
            {history.map((query) => (
              <li
                className="history__item"
                key={query}
              >
                <button
                  className="history__button"
                  onClick={() => {
                    dispatch(setFilter(query));
                    dispatch(setPage(1));
                    setErrorNotice(false)
                  }}
                >
                  {query}
                </button>
              </li>
            ))
            }
          </ul>
        </div>
      }
    </>
  )
}

HistorySearch.propTypes = {
  handleClear: PropTypes.func.isRequired,
  setErrorNotice: PropTypes.func.isRequired,
};
