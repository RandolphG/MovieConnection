import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "./Movies";

describe("Movies", () => {
  function setup() {
    const movies = [
      {
        Poster: "",
        Title: "",
        Type: "",
        imdbID: "",
      },
    ];
    return render(<Movies movies={movies} />);
  }

  function getMovieClassNames() {
    return screen.getByRole("Movies").getAttribute("class");
  }

  it("should render correctly", () => {
    /*Arrange*/
    setup();

    /*Assert*/
    expect(screen.getByRole("Movies")).toBeInTheDocument();
  });
});
