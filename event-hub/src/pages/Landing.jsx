import { Link } from "react-router-dom";
import MusicImg from "../images/music-2.webp";
function Landing() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">
          Book My <span>EVENTS</span>
        </Link>

        <div className="nav-links">
          <a href="Events">Events</a>
          <a href="Explore">Categories</a>
          <a href="about">About</a>
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

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <div className="hero-badge">✨ Discover something exciting</div>

          <h1>
            Find events.
            <br />
            <span>Make memories.</span>
          </h1>

          <p>
            Discover amazing events happening around you. From music and
            workshops to food festivals and community gatherings.
          </p>

          <div className="hero-buttons">
            <Link to="/home" className="primary-btn">
              Explore Events →
            </Link>

            <Link to="/create-event" className="secondary-btn">
              Create an Event
            </Link>
          </div>

          {/* Statistics */}
          <div className="hero-stats">
            <div>
              <strong>500+</strong>
              <span>Events</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Users</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Locations</span>
            </div>
          </div>
        </div>

        {/* Right Side Event Preview */}
        <div className="hero-visual">
          <div className="event-preview-card">
            <div className="event-image">
              <img src={MusicImg} alt="live music img" />
            </div>

            <div className="event-info">
              <span className="event-tag">MUSIC</span>

              <h3>Live Music Night</h3>

              <p>📍 Chennai, Tamil Nadu</p>

              <div className="event-bottom">
                <span>📅 Oct 18, 2026</span>

                <strong>₹499</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
