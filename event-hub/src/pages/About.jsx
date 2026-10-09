import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="about-page">

        < Navbar />
      {/* Hero */}
      <section className="about-hero">
        <span className="section-tag">ABOUT US</span>

        <h1>
          Making Every Event
          <br />
          <span>Worth Remembering</span>
        </h1>

        <p>
          Book My Events is a simple and convenient platform
          for discovering, exploring and booking amazing events.
        </p>
      </section>

      {/* About content */}
      <section className="about-content">

        <div className="about-card">
          <div className="about-icon">🎯</div>

          <h2>Our Mission</h2>

          <p>
            Our mission is to make event discovery and booking
            simple, fast and enjoyable for everyone. Whether you
            love music, technology, food or workshops, we help
            you find experiences that match your interests.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">✨</div>

          <h2>What We Do</h2>

          <p>
            We bring different events together in one place.
            Users can explore upcoming events, view event
            details and easily reserve their place.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">❤️</div>

          <h2>Why Choose Us?</h2>

          <p>
            We focus on a simple user experience, easy
            navigation and helping people discover memorable
            experiences without unnecessary complexity.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <h2>Ready to discover your next event?</h2>

        <p>
          Explore upcoming events and find something exciting.
        </p>

        <Link to="/events" className="cta-button">
          Explore Events
        </Link>

      </section>

    </div>
  );
}

export default About;