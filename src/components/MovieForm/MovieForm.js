import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './MovieForm.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getError, getFilter } from '../../redux/store';
import { setFilter } from '../../redux/filter';
import { setError } from '../../redux/error';
import { setPage } from '../../redux/currentPage';

export const MovieForm = ({ errorNotice, setErrorNotice }) => {
  const dispatch = useDispatch();
  const query = useSelector(getFilter);
  const errorMassage = useSelector(getError);
  const [value, setValue] = useState(query);
  
  useEffect(() => {
    setValue('');

  }, [query])

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === '') {
        dispatch(setError('Please enter the movie you are interested in'));
        setErrorNotice(true);
        return
      }
      dispatch(setFilter(value));
      dispatch(setPage(1));
      setValue('');
  }
  
  return (
    <>
      <form
        className="form movies-form"
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <div className="form__control">
          <input
            className={cn('form__input', {'form__input-error': errorNotice,}
              )}
            type="text"
            id="movie-title"
            value={value.trimLeft()}
            placeholder="Enter a title to search"
            onChange={(e) => {
              setValue(e.target.value);
              setErrorNotice(false);
            }}
          />
          <button
            type="submit"
            className="form__button"
          >
            Search
          </button>
        </div>
      </form>
      {errorNotice &&
        <p className="form__error">
          {errorMassage}
        </p>
      }
    </>
  )
}
