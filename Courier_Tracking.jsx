import React, { useState } from 'react';
import './Courier_Registerr.css';


function CourierForm() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [senderName, setSenderName] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [status, setStatus] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            trackingNumber,
            senderName,
            receiverName,
            status,
            deliveryDate
        };

        fetch('http://localhost:8080/Demo1/CourierTracking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data),
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            setMessage('Failed to insert data');
        });
    };

    return (
        <div className="page-wrapper">
            <header className="hero-section">
                <h1>📦 FastTrack Courier</h1>
                <p>Track and register your parcel with ease</p>
            </header>

            <section className="interactive-section">
                <div className="card-form">
                    <h2>Register Your Courier</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Tracking Number</label>
                            <input
                                type="text"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                placeholder="e.g. TRK123456789"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Sender Name</label>
                            <input
                                type="text"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Receiver Name</label>
                            <input
                                type="text"
                                value={receiverName}
                                onChange={(e) => setReceiverName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Status</label>
                            <input
                                type="text"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                placeholder="e.g. In Transit, Delivered"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Delivery Date</label>
                            <input
                                type="date"
                                value={deliveryDate}
                                onChange={(e) => setDeliveryDate(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">🚀 Submit</button>
                        {message && <p className={`message ${message.includes('Failed') ? 'error' : 'success'}`}>{message}</p>}
                    </form>
                </div>
            </section>

            <footer className="footer">
                <p>© 2025 FastTrack Courier. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default CourierForm;
