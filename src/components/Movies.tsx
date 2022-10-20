export type MoviesProps = { movies: movie[] };

type movie = {
  Poster: string;
  Title: string;
  Type: string;
  imdbID: string;
};

/**
 * MOVIES
 * @description Movies component
 * @return void
 * @param movies
 */
const Movies = ({ movies }: MoviesProps): JSX.Element => {
  console.log("MOVIE_DATA", movies);
  return (
    <>
      {movies.map((movie: movie, index: number) => {
        return (
          <div key={index}>
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

export default Movies;
