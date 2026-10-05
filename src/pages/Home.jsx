import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import { RESTAURANTS } from "../data/restaurants";
import "../styles/home.css";

export default function Home() {
  const featured = RESTAURANTS.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-pill">
            <i className="fa-solid fa-bolt"></i> Instant Table Reservations
          </span>
          <h1>
            Book Your Perfect Table, <br />
            <span className="gradient-text">Skip the Wait.</span>
          </h1>
          <p>
            Discover top-rated restaurants near you and reserve your spot in
            seconds. No calls, no waiting.
          </p>

          <SearchBar />
        </div>
      </section>

      <section className="features" id="about">
        <h2 className="section-title">
          Why Book with <span className="gradient-text">TableTrek?</span>
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3>Instant Confirmation</h3>
            <p>Lock in your table in under 30 seconds — confirmed instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <h3>Top Rated Places</h3>
            <p>Handpicked restaurants with verified reviews and ratings.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-percent"></i>
            </div>
            <h3>Exclusive Offers</h3>
            <p>Unlock special deals and discounts only for TableTrek users.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>Need to change plans? We're here anytime, day or night.</p>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2 className="section-title">
          Trending <span className="gradient-text">Restaurants</span>
        </h2>

        <div className="restaurants-grid">
          {featured.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>

        <div className="view-all">
          <Link to="/restaurants" className="view-all-btn">
            Explore All Restaurants <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Partner Restaurants</p>
          </div>
          <div className="stat-item">
            <h3>2M+</h3>
            <p>Tables Booked</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Cities Covered</p>
          </div>
          <div className="stat-item">
            <h3>4.8★</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
}
