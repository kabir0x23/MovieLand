import React from "react";

const MovieCard = ({movie, darkMode}) => {

    return (
        <div className={darkMode ? "movie-dark" : "movie-light"}>
            <a href={"https://www.imdb.com/title/" + movie.imdbID} target={"_blank"}>
                <div>
                    <h1>{movie.Year}</h1>
                </div>
                <div>
                    <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                         alt={"movie.Title"}/>
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                    {/*<h3 className={darkMode ? "year-dark" : "year-light"}>{movie.Year}</h3>*/}
                </div>
            </a>
        </div>
    )
        ;
};
export default MovieCard;
