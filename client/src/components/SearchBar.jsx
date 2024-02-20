import React, { useState, useEffect } from "react";
import titles from "../assets/titles";
import "./SearchBar.css";
import toast, { Toaster } from "react-hot-toast";
import RecommendedMoviesCard from "./RecommendedMoviesCard";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState([]);
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const renderdata = async (query) => {
    setMovieData([]);
    toast.dismiss();
    if (!titles.includes(query)) {
      toast.error("Please select from the listed movies");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5000/recommend?movie_name=${query}`
      );
      const data = await response.json();
      setMovieData(data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <>
      <div className="searchable-dropdown">
        <input
          type="text"
          list="movie-titles"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleChange}
          className="search-input"
        />
        <datalist id="movie-titles">
          {titles.map((title, index) => (
            <option key={index} value={title} />
          ))}
        </datalist>
      </div>
      <div className="buttondiv">
        <button class="button" onClick={() => renderdata(query)}>
          Get Recommendations
        </button>
      </div>
      {movieData.length >= 1 && <RecommendedMoviesCard movies={movieData} />}
      <Toaster />
    </>
  );
};

export default SearchBar;
