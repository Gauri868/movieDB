import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import necessary modules from React Router
// Import the components
import TopRatedMovies from './components/TopReated'; // Import the TopRatedMovies component
import UpcomingMovies from './components/Upcoming'; // Import the UpcomingMovies component
import Navbar from './components/Navbar'; // Import Navbar
import MovieList from './components/MovieList'; // Import MovieList component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Render the Navbar component */}
        <Navbar />

        {/* Set up Routes */}
        <Routes>
          <Route path="/movieList" element={<MovieList />} /> {/* Route for MovieList page */}
          <Route path="/top-rated" element={<TopRatedMovies />} /> {/* Route for Top Rated Movies page */}
          <Route path="/upcoming" element={<UpcomingMovies />} /> {/* Route for Upcoming Movies page */}
          {/* You can also add a default route to redirect to MovieList */}
          <Route path="/" element={<MovieList />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
