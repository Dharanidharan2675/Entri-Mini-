import { Link } from "react-router-dom";

function EventCard({ event, onSave, saved }) {
  return (
    <div className="event-card">
      <div className="event-card-image">
        <img src={event.image} alt={event.title} />

        <button
          type="button"
          className={`save-btn ${saved ? "saved" : ""}`}
          onClick={() => onSave && onSave(event.id)}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="event-card-content">
        <span className="event-category">
          {event.category}
        </span>

        <Link to={`/event/${event.id}`}>
          <h3>{event.title}</h3>
        </Link>

        <p className="event-location">
          📍 {event.location}
        </p>

        <div className="event-card-footer">
          <span>📅 {event.date}</span>

          <strong>
            ₹{event.price}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default EventCard;