import { Link } from "react-router-dom";
import events from "../data/events";
import EventCard from "../components/Eventcard";

function Events() {
  return (
    <div className="events-page">

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">
          Book My <span>EVENTS</span>
        </Link>

        <div className="nav-links">
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="events-header">
        <span className="section-tag">DISCOVER</span>

        <h1>Upcoming Events</h1>

        <p>
          Find exciting events happening near you and book your
          tickets with ease.
        </p>
      </section>

      {/* Events */}
      <section className="events-list">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </section>

    </div>
  );
}

export default Events;