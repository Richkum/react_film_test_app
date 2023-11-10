import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import MovieCard from "./Movie";
import "./App.css";

const api_url = "http://www.omdbapi.com?apikey=cc1540e7";
const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Title: "Batman v Superman: Dawn of Justice",
  Type: "movie",
  Year: "2016",
  imdbID: "tt2975590",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (tittle) => {
    const response = await fetch(`${api_url}&s=${tittle}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={serachTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={reactLogo}
          alt="search"
          onClick={() => searchMovies(serachTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
