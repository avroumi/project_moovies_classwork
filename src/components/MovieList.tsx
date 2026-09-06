import { type MovieType } from "../types/MovieType";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: MovieType[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </section>
  );
};

export default MovieList;
