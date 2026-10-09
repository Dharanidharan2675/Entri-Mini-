
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    // Name validation
    if (name.length < 3) {
      setError("Name must contain at least 3 characters.");
      return;
    }

    // Email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check if account already exists
    const existingUser = JSON.parse(
      localStorage.getItem("eventHubUser")
    );

    if (existingUser && existingUser.email === email) {
      setError(
        "An account with this email already exists."
      );
      return;
    }

    // Save user
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "eventHubUser",
      JSON.stringify(user)
    );

    // Save login state
    localStorage.setItem("eventHubLoggedIn", "true");

    // Go directly to website
    navigate("/home");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-logo">
          Book My <span>Event</span>
        </Link>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Create your EventHub account.
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
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
              placeholder="Create a password"
              required
            />

            <small className="input-hint">
              Password must be at least 6 characters.
            </small>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          <label className="terms-check">
            <input
              type="checkbox"
              required
            />

            <span>
              I agree to the Terms & Conditions
            </span>
          </label>

          <button
            type="submit"
            className="main-btn auth-submit"
          >
            Create Account
          </button>

        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;
