import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Navbar from "../../components/navbar/Navbar";
import InputField from "../../components/inputfield/InputField.js";

const defaultFormField = {
  username: "",
  password: "",
};

const Login = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Navbar />
      <div className="login-container">
        <header>
          <h1 className="page-heading">Welcome! Login</h1>
        </header>
        <form className="form-container" onSubmit={handleSubmit}>
          <InputField
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
          <InputField
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
          />
          <InputField type="submit" value="submit" />
        </form>
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
    </>
  );
};

export default Login;
