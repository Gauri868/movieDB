import React from 'react';

const MovieDetails = ({ movieDetails, imageBaseURL }) => {
  return (
    <div className="movie-details">
      <h2>{movieDetails.title}</h2>
      <img src={`${imageBaseURL}${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p>{movieDetails.overview}</p>
      <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
      <p><strong>Runtime:</strong> {movieDetails.runtime} minutes</p>
      <p><strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(", ")}</p>
    </div>
  );
};

export default MovieDetails;
