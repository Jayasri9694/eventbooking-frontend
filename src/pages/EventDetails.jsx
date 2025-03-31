import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/events/${id}`)
      .then((response) => {
        setEvent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <div className="event-details-container">
      <h2 className="events-title">{event.name}</h2>
      <p className="events-description">{event.description}</p>
      <p className="events-date">📅 Date: {new Date(event.date).toLocaleDateString()}</p>
      <p className="events-price">💰 Price: ${event.price}</p>
    
      <div className="event-extra-details">
        <p>
          🎉 Join us for an unforgettable experience at <b>{event.name}</b>! Whether you are a fan of live performances, music, or cultural gatherings, this event promises excitement and joy for everyone.
        </p>
        <p>
          📌 <b>Why Attend?</b> This event is an incredible opportunity to connect with like-minded people, enjoy breathtaking performances, and make memories that last a lifetime.
        </p>
        <p>
          🎟️ <b>Limited Spots Available!</b> Don't miss out—grab your tickets now and be part of something amazing.
        </p>
      </div>
    </div>
  );
};

export default EventDetails;