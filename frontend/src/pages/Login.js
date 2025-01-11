import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../components/Form.css";
import "../pages/Login.css";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Define the handleLogin function
  const handleLogin = () => {
    console.log("Login button clicked"); // For debugging

    // Redirect to student dashboard (or any page you want)
    navigate("/student-dashboard");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="button"
          className="btn btn-primary login-button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;