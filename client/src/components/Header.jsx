import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import githubicon from "../assets/icons8-github.svg";
import linkedinicon from "../assets/icons8-in.svg";
const Header = () => {
  return (
    <>
      <div>
        <div className="nav-div">
          <a
            target="_blank"
            href="https://github.com/Haseeeb1/Movie-recommendation-system/tree/main"
          >
            <img src={githubicon} alt="githubicon" />
          </a>
          <a href="https://linkedin.com/in/haseeb-ul-hassan" target="_blank">
            <img src={linkedinicon} alt="linkedin" />
          </a>
        </div>
        <div className="headingdiv">
          <h1>Movie Recommendation system</h1>
          <p>
            Enter a movie name in the search bar below to get 5 similar movies
            to watch.
          </p>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
