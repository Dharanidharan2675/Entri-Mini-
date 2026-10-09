import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function EditProfile() {
  const navigate = useNavigate();

  const savedProfile = JSON.parse(
    localStorage.getItem("eventHubProfile")
  );

  const [profile, setProfile] = useState(
    savedProfile || {
      name: "John Doe",
      email: "john@example.com",
      location: "Chennai, Tamil Nadu",
      bio: "I enjoy discovering new events, meeting interesting people and exploring new experiences.",
    }
  );

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "eventHubProfile",
      JSON.stringify(profile)
    );

    alert("Profile updated successfully!");

    navigate("/profile");
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main className="page-content">

          <div className="page-heading">
            <div>
              <h1>Edit Profile</h1>
              <p>Update your personal information.</p>
            </div>

            <Link to="/profile" className="outline-btn">
              ← Back to Profile
            </Link>
          </div>

          <div className="edit-profile-card">

            {/* Preview */}
            <div className="edit-profile-preview">

              <div className="profile-large">
                {profile.name
                  ? profile.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()
                  : "JD"}
              </div>

              <h2>
                {profile.name || "Your Name"}
              </h2>

              <p>
                {profile.email || "your@email.com"}
              </p>

              <div className="profile-preview-location">
                📍 {profile.location || "Your location"}
              </div>

            </div>

            {/* Form */}
            <form
              className="edit-profile-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Location</label>

                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                />
              </div>

              <div className="form-group">
                <label>About Me</label>

                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  rows="6"
                />
              </div>

              <div className="edit-profile-actions">

                <Link
                  to="/profile"
                  className="cancel-btn"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="main-btn"
                >
                  Save Changes
                </button>

              </div>

            </form>
          </div>

        </main>
      </div>
    </div>
  );
}

export default EditProfile;