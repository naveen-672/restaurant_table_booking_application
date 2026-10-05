import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-col">
          <h3>
            <i className="fa-solid fa-utensils"></i> TableTrek
          </h3>
          <p>
            Reserve your perfect table at the finest restaurants across India.
            Great food, great vibes, zero wait.
          </p>
          <div className="socials">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/restaurants">Restaurants</a></li>
            <li><a href="#">My Bookings</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p><i className="fa-solid fa-phone"></i> +91 1800 123 4567</p>
          <p><i className="fa-solid fa-envelope"></i> hello@tabletrek.in</p>
          <p><i className="fa-solid fa-location-dot"></i> Mumbai, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 TableTrek. All rights reserved. Made with ❤️ in India</p>
      </div>
    </footer>
  );
}
