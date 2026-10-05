import { useSearchParams } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import SearchBar from "../components/SearchBar";
import { RESTAURANTS } from "../data/restaurants";
import "../styles/restaurants.css";

export default function Restaurants() {
  const [params] = useSearchParams();
  const city = params.get("city") || "";
  const date = params.get("date") || "";
  const guests = params.get("guests") || "";

  const filtered = RESTAURANTS.filter((r) => {
    if (city && !r.location.toLowerCase().includes(city.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="restaurants-page">
      <div className="page-header">
        <h1>
          <i className="fa-solid fa-store"></i> Restaurants
        </h1>
        <p>
          {city ? (
            <>
              Showing results in <strong>{city}</strong>
            </>
          ) : (
            "Discover restaurants across India"
          )}
          {date && <> • {date}</>}
          {guests && <> • {guests} guests</>}
        </p>
      </div>

      <div className="search-wrapper">
        <SearchBar compact />
      </div>

      <div className="results-info">
        <p>
          <strong>{filtered.length}</strong> restaurant
          {filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="restaurants-grid">
          {filtered.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <i className="fa-solid fa-utensils"></i>
          <h2>No Restaurants Found</h2>
          <p>Try a different city or clear your filters.</p>
        </div>
      )}
    </div>
  );
}
