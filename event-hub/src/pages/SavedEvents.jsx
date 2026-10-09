import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EventCard from "../components/Eventcard";
import events from "../data/events";

function SavedEvents() {

  const [saved, setSaved] = useState([1, 3]);

  const toggleSave = (id) => {
    setSaved((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const savedEvents = events.filter((event) =>
    saved.includes(event.id)
  );

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          <div className="page-heading">
            <div>
              <h1>Saved Events</h1>
              <p>Your favourite events in one place.</p>
            </div>
          </div>

          {savedEvents.length > 0 ? (

            <div className="event-grid">

              {savedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  saved={true}
                  onSave={toggleSave}
                />
              ))}

            </div>

          ) : (

            <div className="empty-state">
              <div>❤️</div>
              <h2>No saved events</h2>
              <p>Save events you want to attend later.</p>
            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default SavedEvents;