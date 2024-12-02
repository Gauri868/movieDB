import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import './Navbar.css'; // Assuming you have the styles in this file

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

  // Handle the search button click
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Perform search action (you can redirect to a search results page or filter movies)
      console.log('Searching for:', searchQuery);
      // Example: redirect to a search results page (you can customize the logic)
      // window.location.href = `/search?query=${searchQuery}`;
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">MovieDb</div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Popular</Link> {/* Link to Popular page */}
        <Link to="/top-rated" className="navbar-link">Top Rated</Link> {/* Link to Top Rated page */}
        <Link to="/upcoming" className="navbar-link">Upcoming</Link> {/* Link to Upcoming page */}
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query as the user types
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
