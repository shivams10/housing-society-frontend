import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-container">
      <header>
        <h1 className="page-heading">Welcome! SignUp</h1>
      </header>
      <div className="other-options">
        <span>
          Existing User?
          <Link to="/">Login</Link>
        </span>
        <span className="home-link">
          Go back <Link to="/home">Home</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
