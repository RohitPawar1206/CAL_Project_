// CourierWebsite.jsx (full working version with hero fix and router)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './CourierWebsite.css';
import CourierRegister from './Courier_Tracking';
import TrackCourier from './Tracking';

function CourierWebsite() {
  return (
    <Router>
      <div className="site-container">
        <header className="navbar">
          <div className="logo">CourierX</div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/track">Track</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <section className="hero">
              <div className="hero-content">
                <h1>Welcome to CourierX</h1>
                <p>Fast, secure, and reliable courier tracking and registration.</p>
                <Link to="/register" className="cta-button">Get Started</Link>
              </div>
            </section>
          } />
          <Route path="/register" element={<CourierRegister />} />
          <Route path="/track" element={<TrackCourier />} />
        </Routes>

        <footer>
          <p>&copy; 2025 CourierX. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default CourierWebsite;
