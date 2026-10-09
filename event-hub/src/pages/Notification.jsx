import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Notifications() {

  const notifications = [
    {
      icon: "🎉",
      title: "Event registration confirmed",
      text: "Your registration for Live Music Night was successful.",
      time: "10 min ago",
    },
    {
      icon: "🔔",
      title: "New event near you",
      text: "A new technology meetup has been added.",
      time: "2 hours ago",
    },
    {
      icon: "❤️",
      title: "Event reminder",
      text: "Food Festival is coming up this weekend.",
      time: "Yesterday",
    },
  ];

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          <div className="page-heading">
            <h1>Notifications</h1>
            <p>Stay updated with your events.</p>
          </div>

          <div className="notification-list">

            {notifications.map((notification, index) => (

              <div className="notification" key={index}>

                <div className="notification-icon">
                  {notification.icon}
                </div>

                <div className="notification-content">
                  <h3>{notification.title}</h3>
                  <p>{notification.text}</p>
                </div>

                <span>{notification.time}</span>

              </div>

            ))}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Notifications;