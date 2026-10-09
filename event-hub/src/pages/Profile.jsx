import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile() {
  const savedProfile = JSON.parse(
    localStorage.getItem("eventHubProfile")
  );

  const profile = savedProfile || {
    name: "John Doe",
    email: "john@example.com",
    location: "Chennai, Tamil Nadu",
    bio: "I enjoy discovering new events, meeting interesting people and exploring new experiences.",
  };

  const initials = profile.name
    ? profile.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "JD";

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main className="page-content">

          <div className="profile-header">

            <div className="profile-large">
              {initials}
            </div>

            <div>
              <h1>{profile.name}</h1>

              <p>{profile.email}</p>

              <span>
                📍 {profile.location}
              </span>
            </div>

            <Link
              to="/edit-profile"
              className="outline-btn"
            >
              Edit Profile
            </Link>

          </div>

          <div className="profile-stats">

            <div>
              <strong>12</strong>
              <span>Events Attended</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Saved Events</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Events Created</span>
            </div>

          </div>

          <div className="profile-section">
            <h2>About Me</h2>

            <p>
              {profile.bio}
            </p>
          </div>

          <div className="profile-section">
            <h2>Interests</h2>

            <div className="interest-list">
              <span>Music</span>
              <span>Technology</span>
              <span>Food</span>
              <span>Photography</span>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Profile;