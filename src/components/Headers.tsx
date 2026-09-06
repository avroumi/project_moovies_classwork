import { Link } from "react-router-dom";
import { useFavoriteStore } from "../store/zustandStore";

const Headers = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  return (
    <>
      <header>
        <h1>Movie Explorer</h1>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <p>🎬</p>
          <Link to={"/"}>Movie Explorer</Link>
          <Link to={"/movies"}>Movies</Link>
          <div>
            <Link to={"/favorites"}>Favorites </Link>
            {favorites.length}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Headers;
