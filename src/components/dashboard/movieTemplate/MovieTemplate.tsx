import React from "react";
interface MovieTemplatProps {
  movies: movie[];
}

type movie = {
  title: string;
  genre: string[];
  rating: number;
  poster: string;
};

function Movietemplate(props: MovieTemplatProps) {
  const { movies } = props;

  return (
    <>
      {movies &&
        movies.map((movie, idx) => (
          <figure key={idx}>
            <img src={movie.poster} alt="poster" />
            <figcaption>
              <p>{movie && movie.genre.join(" ")}</p>
              <div className="rating">
                <i className="fa fa-heart" />
                <h4>{movie.rating}</h4>
              </div>
            </figcaption>
          </figure>
        ))}
    </>
  );
}
export default Movietemplate;
