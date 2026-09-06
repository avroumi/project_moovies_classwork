import { useNavigate } from "react-router-dom";
import type { MovieType } from "../types/MovieType";
import { memo } from "react";

interface MovieProps {
  movie: MovieType;
}

const MovieCard = ({ movie }: MovieProps) => {
  const navigate = useNavigate();

  return (
    <article className="movie-card">
      <p>Title: {movie.name}</p>

      {movie.image ? (
        <img src={movie.image.medium} alt={movie.name} />
      ) : (
        <p>No image</p>
      )}

      <p>Description: {movie.summary ?? "No description"}</p>

      <button onClick={() => navigate(`/movies/${movie.id}`)}>View ...</button>
    </article>
  );
};

export default memo(MovieCard);
