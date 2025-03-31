import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EventList.css";
const APIBASEURL = "https://event-backend-y12z.onrender.com";
const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${APIBASEURL}/api/events`)
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleEventClick = (id) => {
    navigate(`/events/${id}`); // Navigates to the EventDetailsPage
  };

  return (
    <div className="event-container">
      <h2 className="event-heading">Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="no-events">No events available.</p>
      ) : (
        <div className="event-list">
          {events.map((event) => (
            <div
              key={event._id}
              className="event-card"
              onClick={() => handleEventClick(event._id)}
            >
              <h3 className="event-title">{event.name}</h3>
              <p className="event-description">{event.description}</p>
              <p className="event-date">📅 {new Date(event.date).toLocaleDateString()}</p>
              <p className="event-price">💰 Price: ${event.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;