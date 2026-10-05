import { useParams, useSearchParams, Navigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { RESTAURANTS } from "../data/restaurants";
import "../styles/booking.css";

export default function BookTable() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const restaurant = RESTAURANTS.find((r) => r.id === id);

  if (!restaurant) return <Navigate to="/restaurants" replace />;

  const prefill = {
    date: params.get("date") || "",
    guests: params.get("guests") || 2,
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-side">
          <div className="restaurant-summary">
            <img src={restaurant.image} alt={restaurant.name} />
            <div className="summary-info">
              <h2>{restaurant.name}</h2>
              <p className="cuisine">{restaurant.cuisine}</p>
              <p className="location">
                <i className="fa-solid fa-location-dot"></i> {restaurant.location}
              </p>

              <div className="summary-rating">
                <span className="rating-badge">
                  <i className="fa-solid fa-star"></i> {restaurant.rating}
                </span>
                <span className="reviews">{restaurant.reviews}+ reviews</span>
              </div>

              <div className="summary-details">
                <div>
                  <i className="fa-regular fa-clock"></i>
                  <span>{restaurant.openTime}</span>
                </div>
                <div>
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                  <span>₹{restaurant.priceForTwo} for two</span>
                </div>
              </div>

              <div className="tags">
                {restaurant.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="booking-main">
          <h2>
            <i className="fa-solid fa-calendar-check"></i> Reserve Your Table
          </h2>
          <BookingForm restaurant={restaurant} prefill={prefill} />
        </div>
      </div>
    </div>
  );
}
