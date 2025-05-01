
import React, { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState('');

  return (
    <div className="app">
      <header className="header">
        <h1>Youth Investing Club</h1>
        <p>Empowering students to learn, teach, and grow through investing.</p>
      </header>
      <main className="main">
        <section className="card">
          <h2>Our Mission</h2>
          <p>
            The Youth Investing Club is a peer-led platform where students educate and consult
            one another on the fundamentals of investing. We believe in financial empowerment
            through collaboration, guidance, and real-world learning.
          </p>
        </section>
        <section className="card">
          <h2>Book a Consultation</h2>
          <p>
            Schedule time with a student investment mentor to get personalized guidance on
            building your portfolio, understanding the market, and reaching your goals.
          </p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className="confirm-button">Confirm Appointment</button>
        </section>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Youth Investing Club. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
