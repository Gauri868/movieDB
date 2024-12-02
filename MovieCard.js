import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
  const fallbackImage = 'https://via.placeholder.com/500x750?text=No+Image'; // Fallback image

  return (
    <div className="movie-card">
      <img
        src={movie.poster_path ? `${imageBaseURL}${movie.poster_path}` : fallbackImage} // Use fallback if `poster_path` is null
        alt={movie.title || 'No Title'}
        className="movie-poster"
      />
      <div className="movie-details">
        <h3>{movie.title || 'No Title'}</h3>
        <p>Rating: {movie.vote_average || 'N/A'}</p>
      </div>
    </div>
  );
};

export default MovieCard;
