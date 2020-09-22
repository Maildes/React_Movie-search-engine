import React from 'react';
import PropTypes from 'prop-types';
import { setMovieId } from '../../redux/movieImdb';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getMovies } from '../../redux/store';
import './MovieCard.scss';
import Logo from '../../assets/img/poster_none.png';


export const MovieCard = () => {
  const movies = useSelector(getMovies);
  const dispatch = useDispatch();

    return (
      <>
        {movies.map(({ Title, Poster, Year, Type,  imdbID }) => (
          <li
            className="movies__card card"
            key={imdbID}
            onClick={() => {
              dispatch(setMovieId(imdbID))
            }}
          >
            <Link to={`movie/i=${imdbID}`} >
              <div className="card__image">
                <figure>
                  <img
                    className="image image--poster"
                    src={Poster !== "N/A" ? Poster : Logo}
                    alt="Film logo"/>
                </figure>
              </div>
              <p className="card__title">
                {Title} ({Year})
              </p>
              <button
                className="card__details"
                type="button"
              >
                More details
              </button>
              <span className="card__type">
                {Type}
              </span>
            </Link>
          </li>
          )
        )}
        
      </>
    )
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

