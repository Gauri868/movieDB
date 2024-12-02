import React from 'react';

const MovieCast = ({ movieCast }) => {
  return (
    <div className="movie-cast">
      <h2>Cast</h2>
      <ul>
        {movieCast.map(cast => (
          <li key={cast.id}>
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
