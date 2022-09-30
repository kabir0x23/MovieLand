import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com/?apikey=cc9d55e5';


const App = () => {
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        searchMovies('superman');
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };


    return (
        <div className={"app"}>
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className={"empty"}>
                        <h2>No movies found</h2>
                    </div>
                )}

        </div>
    );
};

export default App;
