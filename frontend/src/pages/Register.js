import React from "react";
import '../components/Form.css';
import "../pages/Register.css";

const Register = () => {
  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;