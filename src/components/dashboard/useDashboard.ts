import { useState } from "react";
import { Discover, DiscoverProps } from "../../utils";
import "./DashbaordStyles.scss";

export const useDashboard = (props: DiscoverProps) => {
  const { results } = props;
  const [movies, setMovies] = useState(results);
  const [value, setValue] = useState("Sort");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  /**
   * strip
   * @description removes all articles in the movie title
   * @param {string} title
   */
  function strip(title: string) {
    return title.replace(/^(a|an|the)\s/i, "");
  }

  /**
   * handleSortLowRating
   * @param a
   * @param b
   */
  const handleSortLowRating = (a: Discover, b: Discover) =>
    a.vote_average > b.vote_average ? 1 : -1;

  /**
   * handleSortHighRating
   * @param a
   * @param b
   */
  const handleSortHighRating = (a: Discover, b: Discover) =>
    b.vote_average > a.vote_average ? 1 : -1;

  /**
   * handleSortAlphabetically
   * @param a
   * @param b
   */
  const handleSortAlphabetically = (a: Discover, b: Discover) =>
    strip(a.title) > strip(b.title) ? 1 : -1;

  /**
   * handleSortReverse
   * @param a
   * @param b
   */
  const handleSortReverse = (a: Discover, b: Discover) =>
    strip(b.title) > strip(a.title) ? 1 : -1;

  const handleSubmit = (e: any) => {
    switch (value) {
      case "Low rating":
        setMovies(movies.sort(handleSortLowRating));
        break;
      case "High rating":
        setMovies(movies.sort(handleSortHighRating));
        break;
      case "A-Z":
        setMovies(movies.sort(handleSortAlphabetically));
        break;
      case "Z-A":
        setMovies(movies.sort(handleSortReverse));
        break;
      default:
        setMovies(movies);
        break;
    }

    e.preventDefault();
  };

  return { handleChange, handleSubmit, movies, value };
};
