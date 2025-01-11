import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../pages/Home.css"; // Link to the CSS file for styling

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = () => {
    navigate("/login"); // Redirect to the Login page
  };

  const handleRegister = () => {
    navigate("/register"); // Redirect to the Register page
  };

  const handleGetStarted = () => {
    navigate("/login"); // Redirect to the Login page
  };

  const handleSignUpNow = () => {
    navigate("/register"); // Redirect to the Register page
  };

  return (
    <div className="home">
      {/* Top Right Buttons */}
      <div className="top-right-buttons">
        <button className="btn btn-secondary" onClick={handleLogin}>
          Login
        </button>
        <button className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Assignment Manager</h1>
          <p>
            Simplify your assignment workflow with our all-in-one platform.
            Upload, track, and manage assignments effortlessly.
          </p>
          <button className="btn btn-primary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/500x300" // Replace with a professional image URL
            alt="Hero"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Efficient Management</h3>
            <p>
              Keep track of your assignments with our intuitive dashboard.
            </p>
          </div>
          <div className="feature-card">
            <h3>Secure Uploads</h3>
            <p>
              Upload and store your files securely with industry-standard
              encryption.
            </p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Tracking</h3>
            <p>
              Stay informed with real-time updates on assignment progress and
              deadlines.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users simplifying their assignment workflows today.</p>
        <button className="btn btn-primary" onClick={handleSignUpNow}>
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Home;