import { Link } from "react-router-dom";
import { useFavoriteStore } from "../store/zustandStore";

const Headers = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  return (
    <>
      <header className="main-header">
        <h1 className="logo">🎬 Movie Explorer</h1>
        <nav style={{ display: "flex", gap: "2rem" }} className="main-nav">
          <Link to={"/"}>Movie Explorer</Link>
          <Link to={"/"}>Movies</Link>
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
