import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



function CreateEvent() {
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: "",
    category: "Music",
    date: "",
    time: "",
    location: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !event.title ||
      !event.date ||
      !event.time ||
      !event.location ||
      !event.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    

    navigate("/explore");
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main className="page-content">
          <div className="page-heading">
            <div>
              <h1>Create Event</h1>
              <p>Create a new event and share it with others.</p>
            </div>
          </div>

          <form
            className="form-card"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Event Name</label>

              <input
                type="text"
                name="title"
                placeholder="Enter event name"
                value={event.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>

                <select
                  name="category"
                  value={event.category}
                  onChange={handleChange}
                >
                  <option value="Music">Music</option>
                  <option value="Technology">Technology</option>
                  <option value="Food">Food</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Business">Business</option>
                  <option value="Art">Art</option>
                </select>
              </div>

              <div className="form-group">
                <label>Price</label>

                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  min="0"
                  value={event.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>

                <input
                  type="text"
                  name="date"
                  placeholder="Example: Oct 30, 2026"
                  value={event.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Time</label>

                <input
                  type="text"
                  name="time"
                  placeholder="Example: 7:00 PM"
                  value={event.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Location</label>

              <input
                type="text"
                name="location"
                placeholder="Enter event location"
                value={event.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                name="description"
                placeholder="Describe your event..."
                rows="5"
                value={event.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate("/explore")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="main-btn"
              >
                Create Event
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default CreateEvent;