import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        Book My <span> Event</span>
      </div>

      <div className="sidebar-menu">

        <p className="menu-title">
          MENU
        </p>

        <NavLink to="/home">
           Dashboard
        </NavLink>

        <NavLink to="/explore">
           Explore
        </NavLink>

        <NavLink to="/saved">
           Saved Events
        </NavLink>

        <NavLink to="/notifications">
           Notifications
        </NavLink>

        <NavLink to="/profile">
           Profile
        </NavLink>

        <p className="menu-title">
          CREATE
        </p>

        <NavLink to="/create-event">
           Create Event
        </NavLink>

      </div>

      <div className="sidebar-bottom">

        <NavLink to="/settings">
           Settings
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;