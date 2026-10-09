import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import EventDetails from "./pages/EventDetails";
import SavedEvents from "./pages/SavedEvents";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Events */}
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/saved" element={<SavedEvents />} />

        {/* User */}
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        {/* Create Event */}
        <Route path="/create-event" element={<CreateEvent />} />

         <Route path="/about" element={<About /> } />  

         
         <Route path="/event" element={<Events /> } />  
      </Routes>

     
    </BrowserRouter>
  );
}

export default App;
