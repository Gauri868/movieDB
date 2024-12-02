import React from 'react';

const Search = ({ searchQuery, setSearchQuery, searchMovies }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>
    </div>
  );
};

export default Search;
