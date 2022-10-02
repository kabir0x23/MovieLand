import React from "react";

const MovieCard = ({ movie, darkMode }) => {

  return (
    <div className={darkMode ? "movie-dark" : "movie-light"}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={"movie.Title"}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <h3 className={darkMode ? "year-dark" : "year-light"}>{movie.Year}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
