import React from "react";
import "./RecommendedMoviesCard.css";

const RecommendedMoviesCard = ({ movies }) => {
  const handleItemClick = (movie) => {
    const searchTerm = encodeURIComponent(movie); // Encode the fruit name for use in the URL
    const searchUrl = `https://www.google.com/search?q=${searchTerm}`; // Replace with your search URL
    window.open(searchUrl, "_blank"); // Navigate to the search URL in the current tab
  };
  return (
    <div className="carddiv">
      <div className="card">
        {movies.map((movie, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(movie)}
            className="list-item"
          >
            {movie}
          </li>
        ))}
        <p className="card-footer">Created by Haseeb Ul Hassan</p>
      </div>
    </div>
  );
};

export default RecommendedMoviesCard;
