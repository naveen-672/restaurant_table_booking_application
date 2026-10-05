export default function ConfirmationTicket({ booking }) {
  const {
    bookingId,
    name,
    email,
    phone,
    date,
    time,
    guests,
    occasion,
    requests,
    restaurantName,
    restaurantImage,
    restaurantLocation,
    cuisine,
  } = booking;

  return (
    <div className="ticket">
      <div className="ticket-header">
        <div className="ticket-logo">
          <i className="fa-solid fa-utensils"></i> TableTrek
        </div>
        <div className="booking-id">
          <span>Booking ID</span>
          <strong>{bookingId}</strong>
        </div>
      </div>

      <img className="ticket-image" src={restaurantImage} alt={restaurantName} />

      <div className="ticket-body">
        <h2>{restaurantName}</h2>
        <p className="ticket-cuisine">{cuisine}</p>
        <p className="ticket-location">
          <i className="fa-solid fa-location-dot"></i> {restaurantLocation}
        </p>

        <div className="ticket-divider"></div>

        <div className="ticket-details">
          <div className="detail-item">
            <span>Guest Name</span>
            <strong>{name}</strong>
          </div>
          <div className="detail-item">
            <span>Phone</span>
            <strong>{phone}</strong>
          </div>
          <div className="detail-item">
            <span>Email</span>
            <strong>{email}</strong>
          </div>
          <div className="detail-item">
            <span>Date</span>
            <strong>{date}</strong>
          </div>
          <div className="detail-item">
            <span>Time</span>
            <strong>{time}</strong>
          </div>
          <div className="detail-item">
            <span>Guests</span>
            <strong>{guests}</strong>
          </div>
          <div className="detail-item">
            <span>Occasion</span>
            <strong>{occasion}</strong>
          </div>
          <div className="detail-item">
            <span>Status</span>
            <strong className="confirmed">
              <i className="fa-solid fa-circle-check"></i> Confirmed
            </strong>
          </div>
        </div>

        {requests && (
          <>
            <div className="ticket-divider"></div>
            <div className="special-requests">
              <span>Special Requests</span>
              <p>{requests}</p>
            </div>
          </>
        )}
      </div>

      <div className="ticket-footer">
        <p>
          <i className="fa-solid fa-circle-info"></i> Show this at the restaurant.
          Please arrive 5 minutes early.
        </p>
      </div>
    </div>
  );
}
