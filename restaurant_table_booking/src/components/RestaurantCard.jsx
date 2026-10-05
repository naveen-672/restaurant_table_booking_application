import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const { id, name, cuisine, location, rating, reviews, priceForTwo, image, tags } =
    restaurant;

  return (
    <div className="restaurant-card">
      <div className="card-image">
        <img src={image} alt={name} loading="lazy" />
        <div className="rating-badge">
          <i className="fa-solid fa-star"></i> {rating}
        </div>
      </div>

      <div className="card-body">
        <h3>{name}</h3>
        <p className="cuisine">{cuisine}</p>
        <p className="location">
          <i className="fa-solid fa-location-dot"></i> {location}
        </p>

        <div className="tags">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="card-footer">
          <div className="price-info">
            <span className="label">For two</span>
            <span className="price">₹{priceForTwo}</span>
          </div>
          <Link to={`/book/${id}`} className="book-btn">
            Book Table
          </Link>
        </div>
      </div>
    </div>
  );
}
