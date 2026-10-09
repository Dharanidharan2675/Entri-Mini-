import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="app-navbar">

      <Link
        to="/home"
        className="app-navbar-logo"
      >
        Book My <span>Event</span>
      </Link>

      <div className="app-navbar-right">

        <Link
          to="/notifications"
          className="navbar-notification"
        >
          🔔
        </Link>

        <Link
          to="/profile"
          className="navbar-profile"
        >
          JD
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;