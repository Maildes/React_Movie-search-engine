import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as api from '../../helpers/api/api';

import './MovieDetails.scss';

import { setLoading } from '../../redux/loading';
import { setError } from '../../redux/error';
import { setDetails } from '../../redux/details';

import { getDetails, getLoading, getMovieId } from '../../redux/store';
import { Loader } from "../Loader/Loader";
import Logo from "../../assets/img/poster_none.png";

export const MovieDetails = ({ history }) => {
  const dispatch = useDispatch();
  const isId = useSelector(getMovieId);
  const isMovie = useSelector(getDetails)
  const isLoading = useSelector(getLoading);
  
  const loadMovieDetails = async() => {
    dispatch(setLoading(true));
    
    try {
      api.getMoviesDetails(isId)
        .then((movie) => {
          if (movie.Response === 'False') {
            setError(movie.Error);
          }
          const action = setDetails(movie);
          
          dispatch(action);
          dispatch(setLoading(false));
        })
    } catch (error) {
      dispatch(setError('Loading error'));
      dispatch(setLoading(false));
    }
  };
  
  useEffect(() => {
    loadMovieDetails();
  }, [isId]);
  
  return (
    <section className="movie movie__info">
      {!isLoading ?
        <>
          <button
            className="movie__button--back"
            onClick={() => history.goBack()}
          >
            Back
          </button>
          <div className="movie__logo">
              <img
                className="movie__img"
                src={isMovie.Poster !== "N/A" ? isMovie.Poster : Logo}
                alt="Film logo"/>
          </div>
          <div className="movie__details">
            <div className="movie__header">
              <h2 className="movie__title">
                {isMovie.Title} ({isMovie.Year})
              </h2>
              {isMovie.imdbRating !== "N/A" &&
                <div className="movie__rating">
                  <div className="star-logo" />
                  <div className="rating__score">
                    <p>{isMovie.imdbRating}/10</p>
                    <p></p>
                  </div>
                </div>
              }
            </div>
            <article className="movie__description description">
              <div className="description__item">
                <h4>Country: </h4>
                <p>{isMovie.Country}</p>
              </div>
              <div className="description__item">
                <h4>Genre: </h4>
                <p>{isMovie.Genre}</p>
              </div>
              <div className="description__item">
                <h4>Runtime: </h4>
                <p>{isMovie.Runtime}</p>
              </div>
              <div className="description__item">
                <h4>Director: </h4>
                <p>{isMovie.Director}</p>
              </div>
              <div className="description__item">
                <h4>Writer: </h4>
                <p>{isMovie.Writer}</p>
              </div>
              <div className="description__item">
                <h4>Actors: </h4>
                <p>{isMovie.Actors}</p>
              </div>
              <div className="description__item">
                <h4>Language: </h4>
                <p>{isMovie.Language}</p>
              </div>
              <div className="description__item">
                <h4>Production: </h4>
                <p>{isMovie.Production}</p>
              </div>
              <div className="movie__plot">
                <h4>Plot: </h4>
                <p>{isMovie.Plot}</p>
              </div>
            </article>
          </div>
        </>
        :
        <Loader />
      }
    </section>
  )
}
