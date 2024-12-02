// import React, { useEffect, useState } from 'react';
// //import MovieCard from './MovieCard';
// import './MovieList.css';

// const MovieList = ({ searchQuery }) => {
//   const [movies, setMovies] = useState([]);
//   const apiKey = 'c45a857c193f6302f2b5061c3b85e743'; // Replace with your API key
 
//   // Fetch Movies (Popular or by Search)
//   const fetchMovies = async () => {
//     const endpoint = searchQuery
//       ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1`
//       : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

//     try {
//       const response = await fetch(endpoint);
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//   useEffect(() => {
//     fetchMovies(); // Fetch movies when the component mounts or searchQuery changes
//   }, [searchQuery]);

//   return (
//     <div className="movie-list">
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;

import React, { useState, useEffect } from 'react';
import './MovieList.css';

const Upcoming = ({ searchQuery }) => {
  const [movies, setMovies] = useState([
    // Hardcoded movie data with image URLs
    {
      id: 1,
      title: 'Movie 1',
      poster_path: 'https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg', // Image URL
      vote_average: 7.5,
    },
    {
      id: 2,
      title: 'Movie 2',
      poster_path: 'https://image.tmdb.org/t/p/w500/xYoD1c4v8gtgYq3X9rbYQbHGLmf.jpg', // Image URL
      vote_average: 8.2,
    },
    {
      id: 3,
      title: 'Movie 3',
      poster_path: 'https://image.tmdb.org/t/p/w500/7F2kSFlr1jG9bTK8EKh2lqE8y8C.jpg', // Image URL
      vote_average: 6.9,
    },
    {
      id: 4,
      title: 'Movie 4',
      poster_path: 'https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg', // Image URL
      vote_average: 7.5,
    },
    {
      id: 5,
      title: 'Movie 5',
      poster_path: 'https://image.tmdb.org/t/p/w500/xYoD1c4v8gtgYq3X9rbYQbHGLmf.jpg', // Image URL
      vote_average: 8.2,
    },
    {
      id: 6,
      title: 'Movie 6',
      poster_path: 'https://image.tmdb.org/t/p/w500/7F2kSFlr1jG9bTK8EKh2lqE8y8C.jpg', // Image URL
      vote_average: 6.9,
    },
    {
      id: 7,
      title: 'Movie 7',
      poster_path: 'https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg', // Image URL
      vote_average: 7.5,
    },
    {
      id: 8,
      title: 'Movie 8',
      poster_path: 'https://image.tmdb.org/t/p/w500/xYoD1c4v8gtgYq3X9rbYQbHGLmf.jpg', // Image URL
      vote_average: 8.2,
    },
  ]);

  useEffect(() => {
    // Normally, you'd fetch movies here, but since we're using hardcoded data, we don't need to call fetchMovies().
  }, [searchQuery]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={movie.poster_path} // Hardcoded image URL
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;


