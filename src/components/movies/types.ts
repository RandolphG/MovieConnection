interface MoviesProps {
  movies?: movie[];
}

type movie = {
  Poster: string;
  Title: string;
  Type: string;
  imdbID: string;
};

export type { MoviesProps, movie };
