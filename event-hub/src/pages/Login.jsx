
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    // Basic validation
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Get registered user
    const savedUser = JSON.parse(
      localStorage.getItem("eventHubUser")
    );

    if (!savedUser) {
      setError(
        "No account found. Please create an account first."
      );
      return;
    }

    // Check login details
    if (
      email !== savedUser.email ||
      password !== savedUser.password
    ) {
      setError("Incorrect email or password.");
      return;
    }

    // Save login state
    localStorage.setItem("eventHubLoggedIn", "true");

    // Go to website
    navigate("/home");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-logo">
          Book My <span>Event</span>
        </Link>

        <h1>Welcome Back!</h1>

        <p className="auth-subtitle">
          Login to continue to EventHub.
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="main-btn auth-submit"
          >
            Login
          </button>

        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
