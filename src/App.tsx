import React, { useEffect, useState } from "react";
import { Header, Movies, Search, MoviesProps } from "./components/";
import { Details } from "./components";
import Dashboard from "./components/dashboard/Dashboard";

const API_KEY = "db530aea";
const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

const LANGUAGE = "en-US";
const move_db_api_key = "0bb2c886e26651f3b9d5a1a810a0bea6";
const MOVIE_DB_DISCOVER_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${move_db_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const MOVIE_DB_API_URL = `https://api.themoviedb.org/3/authentication/token/new?api_key=${move_db_api_key}`;
const API_Read_Access_Token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmIyYzg4NmUyNjY1MWYzYjlkNWExYTgxMGEwYmVhNiIsInN1YiI6IjU3NjBkZWE4OTI1MTQxNzViZjAwMDM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2QZdTOn3kedZFIVvV1qdiSxHDlklme8IV_6U-F5Hfg`;

/**
 * APPLICATION
 * @description A Movie application
 * @constructor
 */
function App(): JSX.Element {
  // @ts-ignore
  const [movies, setMovies] = useState<MoviesProps>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  /* fetching movies from the api*/
  useEffect(() => {
    getMovies().then((result) => console.log(""));
    getMoviesFromDB().then((result) => console.log("done. "));
  }, []);

  /**
   * getMovies
   * @description API call
   * @return Promise<void>
   */
  const getMovies = async (): Promise<void> => {
    const movieResult = await fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * getMoviesFromDB
   * @description Call api
   * @return Promise<void>
   */
  const getMoviesFromDB = async (): Promise<void> => {
    console.log("getting data. ");
    const movieResult = await fetch(MOVIE_DB_DISCOVER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("downloaded data");
        setMovies(data);
        setLoading(false);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("RESULTS", movieResult);
  };

  const Loading = () => <div>LOADING...</div>;

  return (
    <div>
      {/*<Details />*/}
      <Dashboard />
      {/*{isLoading ? <Loading /> : <Movies movies={movies} />}*/}
    </div>
  );
}

export default App;
