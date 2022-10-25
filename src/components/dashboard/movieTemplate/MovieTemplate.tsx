import React from "react";
import { MOVIE_DB_IMAGE_BASE_URL } from "../../../utils/config";
import { Discover } from "../../../utils";

interface MovieTemplateProps {
  movies: Discover[];
}

function MovieTemplate(props: MovieTemplateProps) {
  const { movies } = props;
  const imageSize: string = "w500";

  return (
    <>
      {movies &&
        movies.map((movie, idx) => (
          <figure key={idx}>
            <img
              onClick={(e) => {
                console.log("CLICK", movie);
              }}
              src={`${MOVIE_DB_IMAGE_BASE_URL}${imageSize}${movie.backdrop_path}`}
              alt="backdrop"
            />
            <figcaption>
              {/*<p>{movie && movie.genre.join(" ")}</p>*/}
              <div className="rating">
                <i className="fa fa-heart" />
                <h4>{movie.vote_average}</h4>
              </div>
            </figcaption>
          </figure>
        ))}
    </>
  );
}
export default MovieTemplate;
