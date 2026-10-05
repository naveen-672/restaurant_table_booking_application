import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ restaurant, prefill = {} }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: prefill.date || "",
    time: restaurant.slots[0],
    guests: prefill.guests || 2,
    occasion: "Casual Dining",
    requests: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = "TB" + Math.floor(100000 + Math.random() * 900000);
    const booking = {
      ...form,
      bookingId,
      restaurantName: restaurant.name,
      restaurantImage: restaurant.image,
      restaurantLocation: restaurant.location,
      cuisine: restaurant.cuisine,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("tableBooking", JSON.stringify(booking));
    navigate("/confirmation");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9+\s-]{8,15}"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Guests</label>
          <select name="guests" value={form.guests} onChange={handleChange}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Available Time Slots</label>
        <div className="slot-grid">
          {restaurant.slots.map((slot) => (
            <label
              key={slot}
              className={`slot-option ${form.time === slot ? "active" : ""}`}
            >
              <input
                type="radio"
                name="time"
                value={slot}
                checked={form.time === slot}
                onChange={handleChange}
              />
              <i className="fa-regular fa-clock"></i> {slot}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Occasion</label>
        <select name="occasion" value={form.occasion} onChange={handleChange}>
          <option>Casual Dining</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Business Meeting</option>
          <option>Date Night</option>
        </select>
      </div>

      <div className="form-group">
        <label>Special Requests (optional)</label>
        <textarea
          name="requests"
          rows="3"
          placeholder="Window seat, birthday cake, etc."
          value={form.requests}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="confirm-btn">
        <i className="fa-solid fa-check-circle"></i> Confirm Reservation
      </button>
    </form>
  );
}
