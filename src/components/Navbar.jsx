import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <i className="fa-solid fa-utensils"></i>
          <span>TableTrek</span>
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/restaurants">Restaurants</NavLink>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="nav-cta">
          <i className="fa-solid fa-user"></i> Sign In
        </button>
      </div>
    </nav>
  );
}
