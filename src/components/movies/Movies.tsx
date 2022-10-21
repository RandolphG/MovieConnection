export interface MoviesProps {
  movies?: movie[];
}

export type movie = {
  Poster: string;
  Title: string;
  Type: string;
  imdbID: string;
};

/**
 * MOVIES
 * @description Rendering movie results from fetched data.
 * @return void
 * @param movies
 */
export const Movies = (props: MoviesProps): JSX.Element => {
  const { movies } = props;

  console.log("MOVIE_DATA", movies);
  return (
    <>
      {movies &&
        movies.map((movie: movie, index: number) => {
          return (
            <div key={`movie-${index}`}>
              <div>{movie.Title}</div>
              <img alt={movie.Title} src={movie.Poster} />
              <div>{movie.Type}</div>
              <div>{movie.imdbID}</div>
            </div>
          );
        })}
    </>
  );
};
