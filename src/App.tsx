import React, { useEffect, useState } from "react";
import { Details, Header, Movies, Search } from "./components";
import { movie, MoviesProps } from "./components/movies/Movies";

const API_KEY = "db530aea";
const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

/**
 * APPLICATION
 * @description A Movie application
 * @constructor
 */
function App() {
  const [movies, setMovies] = useState<movie[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  /* fetching movies from the api*/
  useEffect(() => {
    getMovies().then((result) => console.log(result));
    console.log(movies);
  }, []);

  /**
   * getMovies
   * @description API call
   * @return Promise<void>
   */
  const getMovies = async (): Promise<void> => {
    const movieResult = fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("RESULTS", movieResult);
  };

  const Loading = () => <div>LOADING...</div>;

  return (
    <div>
      <div>MOVIE CONNECTION</div>
      <Header />
      <Search />
      <Details />
      {isLoading ? (
        <Loading />
      ) : (
        <div
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            border: "2px solid black",
          }}
        >
          <Movies movies={movies} />
        </div>
      )}
    </div>
  );
}

export default App;
