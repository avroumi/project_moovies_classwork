import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import useFetch from "../hooks/useFetch";
import type { MovieType } from "../types/MovieType";

const Movies = () => {
  const [search, setSearch] = useState<string>("");

  const {
    data: movies,
    loading,
    error,
  } = useFetch<MovieType[]>("https://api.tvmaze.com/shows");

  const filteredData = useMemo(() => {
    if (!movies) return [];
    return movies.filter((movie) =>
      movie.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [movies, search]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movies) {
    return <p>No movies found</p>;
  }

  return (
    <>
      <main className="movies-page">
        <h2>Discover Movies</h2>
        <SearchBar search={search} setSearch={setSearch} />
        <MovieList movies={filteredData} />
      </main>
    </>
  );
};

export default Movies;
