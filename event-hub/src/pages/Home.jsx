import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EventCard from "../components/Eventcard";

import events from "../data/events";

function Home() {
  const [search, setSearch] = useState("");
  const [savedEvents, setSavedEvents] = useState([]);

  const handleSave = (id) => {
    setSavedEvents((prev) => {
      if (prev.includes(id)) {
        return prev.filter((eventId) => eventId !== id);
      }

      return [...prev, id];
    });
  };

  const filteredEvents = events.filter((event) => {
    const searchText = search.toLowerCase();

    return (
      event.title.toLowerCase().includes(searchText) ||
      event.location.toLowerCase().includes(searchText) ||
      event.category.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main className="page-content">
          {/* Hero */}
          <section className="home-hero">
            <div className="hero-content">
              <span className="hero-tag">
                ✨ Discover. Connect. Experience.
              </span>

              <h1>
                Find Events
                <br />
                <span>You'll Love</span>
              </h1>

              <p>
                Discover exciting events happening around
                you and connect with people who share your
                interests.
              </p>

              <div className="hero-actions">
                <Link
                  to="/explore"
                  className="main-btn"
                >
                  Explore Events
                </Link>

                <Link
                  to="/create-event"
                  className="outline-btn"
                >
                  Create Event
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-circle">
                🎉
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="stats-grid">
            <div className="stat-card">
              <span>🎫</span>
              <div>
                <strong>{events.length}+</strong>
                <p>Events</p>
              </div>
            </div>

            <div className="stat-card">
              <span>👥</span>
              <div>
                <strong>1,200+</strong>
                <p>Attendees</p>
              </div>
            </div>

            <div className="stat-card">
              <span>📍</span>
              <div>
                <strong>25+</strong>
                <p>Locations</p>
              </div>
            </div>

            <div className="stat-card">
              <span>⭐</span>
              <div>
                <strong>4.8</strong>
                <p>Average Rating</p>
              </div>
            </div>
          </section>

          {/* Search */}
          <section className="home-search-section">
            <div className="section-title">
              <div>
                <h2>Find Your Next Event</h2>
                <p>
                  Search through exciting events and
                  discover something new.
                </p>
              </div>
            </div>

            <div className="home-search">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Search events, locations or categories..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="home-events-section">
            <div className="section-title">
              <div>
                <h2>Upcoming Events</h2>
                <p>
                  Don't miss these exciting events.
                </p>
              </div>

              <Link to="/explore">
                View All →
              </Link>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="event-grid">
                {filteredEvents
                  .slice(0, 6)
                  .map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onSave={handleSave}
                      saved={savedEvents.includes(event.id)}
                    />
                  ))}
              </div>
            ) : (
              <div className="empty-state">
                <div>🔍</div>

                <h2>No events found</h2>

                <p>
                  Try searching for another event.
                </p>

                <button
                  type="button"
                  className="main-btn"
                  onClick={() => setSearch("")}
                >
                  Clear Search
                </button>
              </div>
            )}
          </section>

          {/* Bottom CTA */}
          <section className="home-cta">
            <div>
              <h2>Have an Event to Share?</h2>

              <p>
                Create your event and let people discover
                it on EventHub.
              </p>
            </div>

            <Link
              to="/create-event"
              className="main-btn"
            >
              + Create Event
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;