import { MoviesProps, movie } from "./types";

/**
 * MOVIES
 * @description Rendering movie results from fetched data.
 * @return void
 * @param props
 */
const Movies = (props: MoviesProps): JSX.Element => {
  const { movies } = props;

  return (
    <>
      {movies &&
        movies.map((movie: movie, index: number) => {
          return (
            <div
              key={`movie-${index}`}
              style={{
                width: "200px",
                display: "flex",
                flexDirection: "column",
                border: "2px solid black",
              }}
            >
              <div>{movie.Title}</div>
              <img alt={movie.Title} src={movie.Poster} />
              <div>{movie.Type}</div>
            </div>
          );
        })}
    </>
  );
};

export default Movies;
