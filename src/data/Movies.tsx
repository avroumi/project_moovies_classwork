import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import type { MovieType } from "../types/MovieType";

const Movies = () => {
  const [search, setSearch] = useState<string>("");
  const {
    data: movies,
    loading,
    error,
  } = useFetch<MovieType[]>("https://api.tvmaze.com/shows");

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!movies) {
    return <p>No movies found</p>;
  }

  const filteredData = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <MovieList movies={filteredData} />
    </>
  );
};

export default Movies;
