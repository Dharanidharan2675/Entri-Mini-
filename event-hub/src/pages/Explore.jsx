import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EventCard from "../components/Eventcard";

import events from "../data/events";

function Explore() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Music",
    "Technology",
    "Food",
    "Workshop",
    "Business",
    "Art",
  ];

  const filteredEvents = events.filter((event) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      event.title.toLowerCase().includes(searchText) ||
      event.location.toLowerCase().includes(searchText) ||
      event.category.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main className="page-content">
          {/* Heading */}
          <div className="page-heading">
            <div>
              <h1>Explore Events</h1>
              <p>
                Discover exciting events and find something
                you would love to attend.
              </p>
            </div>

            <Link to="/create-event" className="main-btn">
              + Create Event
            </Link>
          </div>

          {/* Search */}
          <div className="explore-search">
            <span className="search-icon">🔍</span>

            <input
              type="text"
              placeholder="Search events, locations or categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="explore-section">
            <div className="section-title">
              <div>
                <h2>Categories</h2>
                <p>Filter events by category</p>
              </div>

              <span>
                {filteredEvents.length} events
              </span>
            </div>

            <div className="filter-list">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    selectedCategory === category
                      ? "filter-btn active"
                      : "filter-btn"
                  }
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="explore-section">
            <div className="section-title">
              <div>
                <h2>
                  {selectedCategory === "All"
                    ? "All Events"
                    : `${selectedCategory} Events`}
                </h2>

                <p>
                  {search
                    ? `Results for "${search}"`
                    : "Browse upcoming events"}
                </p>
              </div>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="event-grid">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div>🔍</div>

                <h2>No events found</h2>

                <p>
                  Try a different search or category.
                </p>

                <button
                  type="button"
                  className="main-btn"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Explore;