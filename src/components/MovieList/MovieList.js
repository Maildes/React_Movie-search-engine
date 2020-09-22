import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = () => {
    return (
      <ul className="movies movies__list">
        <MovieCard />
      </ul>
    )
}
