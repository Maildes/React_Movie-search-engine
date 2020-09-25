import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import {useSelector} from "react-redux";
import {getLoading, getMovies} from "../../redux/store";
import {Loader} from "../Loader/Loader";

export const MovieList = () => {
  const movies = useSelector(getMovies);
  const isLoading = useSelector(getLoading);
  
  return (
    <>
      {!isLoading && <Loader />}
  
      <ul className="movies movies__list">
        <MovieCard />
      </ul>
    </>
    )
}
