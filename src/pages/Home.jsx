import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to the Event Booking Platform</h1>
        <p>Discover, explore, and book amazing events effortlessly.</p>
        
        {/* Buttons */}
        <div className="home-buttons">
          <button className="explore-btn" onClick={() => navigate("/events")}>
            Explore Events
          </button>
          <button className="logins-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;