import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com/?apikey=cc9d55e5';


const App = () => {
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        searchMovies('superman');
    }, []);

    function ToggleTheme(){
        setDarkMode(prev => !prev)
    }

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
        setMovies(data.Search);
    };
    
    const handleKeyPress=(event)=>{
    	if(event.key==="Enter"){
    		searchMovies(searchTerm);
    	}
    };

    return (
        <div className={darkMode ? 'main-dark' : "main-light"}> 
            <div className='switch' onClick={ToggleTheme}>
                {
                    !darkMode ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                    </svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>
                }
            </div> 
            <div className={"app"}>
                <h1 className='heading-light'>MovieLand</h1>

                <div className={darkMode ? 'search-dark' : "search-light"}>
                    <input
                        placeholder="Search for movies"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        onKeyDown={handleKeyPress}
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
                            {movies.map((movie, index) => (
                                <MovieCard movie={movie} key={index} darkMode={darkMode}/>
                            ))}
                        </div>
                    ) : (
                        <div className={"empty"}>
                            <h2>No movies found</h2>
                        </div>
                    )}

            </div>

        </div>
    );
};

export default App;
