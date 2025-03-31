import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to Event Booking Platform! Our goal is to provide a seamless 
        experience for booking and managing events. Whether you're an organizer 
        or an attendee, we make event planning easy and accessible for everyone.
      </p>

      {showDetails && (
        <div className="about-details">
          <p>
            Our platform offers a variety of features, including secure 
            ticketing, real-time event updates, and an intuitive dashboard 
            for managing bookings effortlessly.
          </p>
          <p>
            We are committed to enhancing the event experience for both 
            organizers and attendees by integrating modern technologies.
          </p>
        </div>
      )}

      <button className="about-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Show Less" : "Learn More"}
      </button>
    </div>
  );
};

export default About;