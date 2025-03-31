import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

const APIBASEURL = "https://event-backend-y12z.onrender.com";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.event) newErrors.event = "Please select an event";
    if (!formData.date) newErrors.date = "Please choose a date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateForm()) return;

    try {
      await axios.post(`${APIBASEURL}/api/bookings`, formData);
      setSuccess("Booking submitted successfully!");
      setFormData({ name: "", email: "", phone: "", event: "", date: "", message: "" });
      setErrors({});
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };
  return (
    <div className="booking-form-container">
      <h2>Book Your Event</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="event">Select Event</label>
          <select name="event" id="event" value={formData.event} onChange={handleChange}>
            <option value="">Choose an event</option>
            <option value="Music Concert">Music Concert</option>
            <option value="Tech Conference">Tech Conference</option>
            <option value="Art Exhibition">Art Exhibition</option>
            <option value="Startup Summit">Startup Summit</option>
            <option value="Food Festival">Food Festival</option>
            <option value="Comedy Night">Comedy Night</option>
            <option value="Film Festival">Film Festival</option>
            <option value="Marathon">Marathon</option>
            <option value="Science Fair">Science Fair</option>
            <option value="Gaming Expo">Gaming Expo</option>
          </select>
          {errors.event && <span className="error">{errors.event}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Message</label>
          <textarea name="message" id="message" placeholder="Enter any special requests" value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
