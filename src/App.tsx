import React from "react";
import { Dashboard } from "./components/";
import { Details } from "./components";
import { useApp } from "./useApp";

/**
 * APPLICATION
 * @description A Movie application
 * @constructor
 */
function App(): JSX.Element {
  const { movies, isLoading } = useApp();
  const Loading = () => <div>LOADING...</div>;

  return (
    <div>
      {/*<Details />*/}
      {/*@ts-ignore*/}
      {isLoading ? <Loading /> : <Dashboard results={movies} />}
    </div>
  );
}

export default App;
