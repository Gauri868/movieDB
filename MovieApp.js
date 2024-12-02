import React, { useState, useEffect } from "react";
import "./App.css";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = "c45a857c193f6302f2b5061c3b85e743";
  const imageBaseURL = "https://image.tmdb.org/t/p/w500";

  const fetchMovies = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  const fetchPopularMovies = () => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
  };

  const fetchUpcomingMovies = () => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
  };

  const fetchTopRatedMovies = () => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      );
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  };

  const searchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Failed to search movies:", error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie App</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button onClick={fetchPopularMovies}>Popular Movies</button>
        <button onClick={fetchUpcomingMovies}>Upcoming Movies</button>
        <button onClick={fetchTopRatedMovies}>Top-Rated Movies</button>
      </div>

      {/* Movies Grid */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`${imageBaseURL}${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <button onClick={() => fetchMovieDetails(movie.id)}>Details</button>
          </div>
        ))}
      </div>

      {/* Movie Details */}
      {movieDetails && (
        <div className="movie-details">
          <h2>{movieDetails.title}</h2>
          <img
            src={`${imageBaseURL}${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>{movieDetails.overview}</p>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <div className="movie-grid">
            {searchResults.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`${imageBaseURL}${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieApp;
