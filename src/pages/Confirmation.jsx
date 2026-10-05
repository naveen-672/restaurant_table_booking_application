import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationTicket from "../components/ConfirmationTicket";
import "../styles/confirmation.css";

export default function Confirmation() {
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("tableBooking");
    if (!data) {
      navigate("/");
      return;
    }
    setBooking(JSON.parse(data));
  }, [navigate]);

  if (!booking) return null;

  return (
    <div className="confirmation-page">
      <div className="confirmation-inner">
        <div className="success-banner">
          <div className="success-icon">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h1>Table Booked!</h1>
          <p>Your reservation is confirmed. See you there!</p>
        </div>

        <ConfirmationTicket booking={booking} />

        <div className="confirmation-actions">
          <Link to="/" className="secondary-btn">
            <i className="fa-solid fa-home"></i> Back to Home
          </Link>
          <button className="primary-btn" onClick={() => window.print()}>
            <i className="fa-solid fa-print"></i> Print Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
