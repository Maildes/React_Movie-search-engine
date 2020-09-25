import React, { useEffect, useState } from 'react'
import './MainPage.scss';
import { MovieForm } from '../MovieForm/MovieForm';
import { MovieList } from '../MovieList/MovieList';
import { Pagination } from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPage,
  getFilter,
  getHistorySearch,
  getLoading,
  getMovies
} from '../../redux/store';
import { setLoading } from '../../redux/loading';
import * as api from '../../helpers/api/api';
import { setError } from '../../redux/error';
import { setClearMovies, setMovies } from '../../redux/movies';
import { HistorySearch } from '../HistorySearch/HistorySearch';
import { clearSearchMovie, setNewSearchMovie } from '../../redux/historySearch';
import { setFilter } from '../../redux/filter';
import { HelloMarakas } from '../../helpers/HelloMarakas';
import {Loader} from "../Loader/Loader";

export const MainPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const isLoading = useSelector(getLoading);
  const currentPage = useSelector(getCurrentPage)
  const history = useSelector(getHistorySearch);
  const movieTitle = useSelector(getFilter);
  
  const [notice, setNotice] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);
  
  const changeHistory = (query) => {
    if (history.includes(query)) {
      dispatch(setFilter(query));

    } else {
      dispatch(setNewSearchMovie(query))
    }
  }
  
  const loadMovies = async() => {
    dispatch(setLoading(true));
    
    try {
      api.getMovies(movieTitle, currentPage)
        .then((moviesFromServer) => {
          if (moviesFromServer.Response !== 'False') {
            const action = setMovies(moviesFromServer.Search);
  
            dispatch(action);
            setTotalMovies(moviesFromServer.totalResults);
            changeHistory(movieTitle)
            return
          }  else if (movieTitle === '') {
            dispatch(setLoading(false));
            setNotice(false);
            return
          }
    
          dispatch(setError('Movie not found, please try again'));
          setNotice(true);
        })
    } catch (error) {
      dispatch(setError('Failed to load movies, sorry, please try again'));
      dispatch(setLoading(false));
    }
  };
  
  
  useEffect(() => {
    loadMovies();
  }, [movieTitle, currentPage]);
  
  const handleClear = () => {
    dispatch(clearSearchMovie());
    dispatch(setClearMovies());
    dispatch(setLoading(false));
    setNotice(false);
    window.localStorage.clear();
    setTotalMovies(0);
  }
  
  return (
    <main className="page-content">
      <header className="header">
        <h1 className="header__title">
          Who seeks shall find :)
        </h1>
        <MovieForm
          loadMovies={loadMovies}
          errorNotice={notice}
          setErrorNotice={setNotice}
        />
        <HistorySearch
          handleClear={handleClear}
          setErrorNotice={setNotice}
        />
      </header>
      
      {isLoading ?
        <MovieList movies={movies} />
        :
        <HelloMarakas />
      }
  
      {totalMovies > 40 &&
        <Pagination totalMovies={totalMovies}/>
      }
    </main>
  )
}
