import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CITIES } from "../data/restaurants";

export default function SearchBar({ compact = false }) {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (date) params.set("date", date);
    if (guests) params.set("guests", guests);
    navigate(`/restaurants?${params.toString()}`);
  };

  return (
    <form className={`search-card ${compact ? "compact" : ""}`} onSubmit={handleSearch}>
      <div className="search-form">
        <div className="form-group">
          <label>
            <i className="fa-solid fa-location-dot"></i> City
          </label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">All cities</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>
            <i className="fa-solid fa-calendar-days"></i> Date
          </label>
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fa-solid fa-user-group"></i> Guests
          </label>
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i> Find Tables
        </button>
      </div>
    </form>
  );
}
