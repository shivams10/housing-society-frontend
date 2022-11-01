import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <header>
        <h1 className="page-heading">Welcome! Login</h1>
      </header>
      <div className="other-options">
        <span>
          New User?
          <Link to="/signup">Signup</Link>
        </span>
        <span className="home-link">
          Go back <Link to="/">Home</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
