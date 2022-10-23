import React from "react";
import "./DashbaordStyles.scss";
import { DiscoverProps } from "../../utils";
import MovieTemplate from "./movieTemplate/MovieTemplate";
import { useDashboard } from "./useDashboard";

function Dashboard(props: DiscoverProps): JSX.Element {
  const { handleChange, handleSubmit, value, movies } = useDashboard(props);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select id="rating-filter" value={value} onChange={handleChange}>
          <option value="Sort">Sort</option>
          <option value="Low rating">Low rating</option>
          <option value="High rating">High rating</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <input type="submit" value="Filter" />
      </form>
      <section>
        <MovieTemplate movies={movies} />
      </section>
    </div>
  );
}

export default Dashboard;
