import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/Moviecard";

function Favourites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="Favourites">
        <h2>Your Fvaourites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="Favourites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding Movies to your favoutites and they will appear here</p>
    </div>
  );
}

export default Favourites;
