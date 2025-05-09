import React, { useState } from "react";
import "./Tracking.css";

function TrackCourier() {
  const [courierId, setCourierId] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    try {
      const response = await fetch(`http://localhost:8080/TrackCourier/track?courierId=${courierId}`);
      if (!response.ok) throw new Error("Courier not found");
      const data = await response.json();
      setStatus(data);
      setError("");
    } catch (err) {
      setStatus(null);
      setError(err.message);
    }
  };

  return (
    <div className="form-section">
      <h2>Track Your Courier</h2>
      <input
        type="text"
        placeholder="Enter Courier ID"
        value={courierId}
        onChange={(e) => setCourierId(e.target.value)}
      />
      <button onClick={handleTrack}>Track</button>

      {status && (
        <div className="tracking-result">
          <p><strong>Status:</strong> {status.status}</p>
          <p><strong>Location:</strong> {status.location}</p>
          <p><strong>ETA:</strong> {status.eta}</p>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default TrackCourier;
