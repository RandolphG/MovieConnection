import React, { useEffect, useState } from "react";
import { Dashboard } from "./components/";
import { DiscoverProps, IDiscoverResults } from "./utils";
import { MOVIE_DB_DISCOVER_URL } from "./config";
import { Details } from "./components";

/**
 * APPLICATION
 * @description A Movie application
 * @constructor
 */
function App(): JSX.Element {
  // @ts-ignore
  const [movies, setMovies] = useState<DiscoverProps>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  /* fetching movies from the api*/
  useEffect(() => {
    getMoviesFromDB().then((_result) => console.log("done. "));
  }, []);

  /**
   * getMoviesFromDB
   * @description Call api
   * @return Promise<void>
   */
  const getMoviesFromDB = async (): Promise<void> => {
    console.log("getting data. ");
    const moviesFromDB: IDiscoverResults = await fetch(
      `${MOVIE_DB_DISCOVER_URL}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("downloaded data");
        setMovies(data.results);
        setLoading(false);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("MOVIES_FROM_DB", moviesFromDB);
    console.log("MOVIES_FROM_DB_RESULTS", moviesFromDB.results);
  };

  const Loading = () => <div>LOADING...</div>;

  return (
    <div>
      <Details />
      {/*@ts-ignore*/}
      {isLoading ? <Loading /> : <Dashboard results={movies} />}
    </div>
  );
}

export default App;
