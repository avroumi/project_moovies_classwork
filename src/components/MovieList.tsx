import { type MovieType } from "../data/Movies";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: MovieType[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return movies.map((movie) => (
    <div key={movie.id}>
      <MovieCard movie={movie} />
    </div>
  ));
};

export default MovieList;
