import { useNavigate, useParams } from "react-router-dom";
import { useFavoriteStore } from "../store/zustandStore";
import useFetch from "../hooks/useFetch";
import type { MovieType } from "../types/MovieType";
import { useCallback } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: movie,
    loading,
    error,
  } = useFetch<MovieType>(`https://api.tvmaze.com/shows/${id}`);

  const addStore = useFavoriteStore((state) => state.add);
  const removeStore = useFavoriteStore((state) => state.subtract);
  const favorites = useFavoriteStore((state) => state.favorites);

  const toggleFavorite = useCallback(
    (id: number) => {
      if (favorites.includes(id)) {
        removeStore(id);
      } else {
        addStore(id);
      }
    },
    [favorites, addStore, removeStore],
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <h3>NOT SELECTED MOVIE</h3>;
  }

  return (
    <article>
      <button onClick={() => navigate("/")}>Back to Movies</button>

      <p>Title: {movie.name}</p>

      {movie.image ? (
        <img src={movie.image.medium} alt={movie.name} />
      ) : (
        <p>No image</p>
      )}

      <p>Description: {movie.summary ?? "No description"}</p>
      <button onClick={() => toggleFavorite(movie.id)}>
        {favorites.includes(movie.id)
          ? "Remove from favorites"
          : "Add to favorites"}
      </button>
    </article>
  );
};

export default MovieDetails;
