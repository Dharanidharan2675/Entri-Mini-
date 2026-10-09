import { Link, useParams } from "react-router-dom";
import events from "../data/events";
import Navbar from "../components/Navbar";

function EventDetails() {
  const { id } = useParams();

  const event = events.find(
    (item) => item.id === Number(id)
  );

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <div>
      <Navbar />

      <main className="details-page">

        <Link to="/explore" className="back-link">
          ← Back to Explore
        </Link>

        <div className="details-card">

          <div className="details-image">
            <img
              src={event.image}
              alt={event.title}
            />
          </div>

          <div className="details-content">

            <span className="event-category">
              {event.category}
            </span>

            <h1>{event.title}</h1>

            <p className="details-description">
              {event.description}
            </p>

            <div className="details-info">

              <div>
                <span>📅 Date</span>
                <strong>{event.date}</strong>
              </div>

              <div>
                <span>⏰ Time</span>
                <strong>{event.time}</strong>
              </div>

              <div>
                <span>📍 Location</span>
                <strong>{event.location}</strong>
              </div>

              <div>
                <span>👥 Attendees</span>
                <strong>{event.attendees}</strong>
              </div>

            </div>

            <div className="organizer-box">
              <span>Organized by</span>
              <strong>{event.organizer}</strong>
            </div>

            <div className="booking-row">

              <div>
                <span>Ticket Price</span>
                <strong>₹{event.price}</strong>
              </div>

              <button
                className="main-btn"
                onClick={() =>
                  alert("Event registered successfully!")
                }
              >
                Register Now
              </button>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default EventDetails;