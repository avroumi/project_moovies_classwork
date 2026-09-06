import { useFavoriteStore } from "../store/zustandStore";
import useFetch from "../hooks/useFetch";
import type { MovieType } from "../types/MovieType";

const Favorites = () => {
  const favoritesId = useFavoriteStore((state) => state.favorites);
  const remove = useFavoriteStore((state) => state.subtract);

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

  const favoriteMovies = movies.filter((movie) =>
    favoritesId.includes(movie.id),
  );

  if (favoriteMovies.length === 0) {
    return <p>No favorites yet</p>;
  }

  return (
    <>
      {favoriteMovies.map((movie) => (
        <article key={movie.id}>
          <p>Title: {movie.name}</p>

          {movie.image ? (
            <img src={movie.image.medium} alt={movie.name} />
          ) : (
            <p>No image</p>
          )}

          <p>Description: {movie.summary ?? "No description"}</p>

          <button onClick={() => remove(movie.id)}>
            Remove from favorites
          </button>
        </article>
      ))}
    </>
  );
};

export default Favorites;
