import Navbar from "../../components/navbar/Navbar";
import InputField from "../../components/inputfield/InputField.js";
import "./Signup.css";
import { useAuth } from "../../contexts/UserContext";

import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultFormField = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  contact: "",
  is_admin: 0,
};

const Signup = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { first_name, last_name, email, password, contact, is_admin } =
    formField;
  const { setCurrentUser } = useAuth();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${BASE_URL}/users`, {
      ...formField,
    })
      .then(() => {
        setCurrentUser(defaultFormField);
        console.log("Registration Successful");
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 501) {
          console.log("Couldn't connect to server");
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <header>
          <h1 className="page-heading">Welcome! Signup</h1>
        </header>
        <form className="form-container" onSubmit={handleSubmit}>
          <InputField
            name="first_name"
            type="name"
            value={first_name}
            onChange={handleChange}
            required
          />
          <InputField
            name="last_name"
            type="name"
            value={last_name}
            onChange={handleChange}
            required
          />
          <InputField
            name="contact"
            type="number"
            value={contact}
            onChange={handleChange}
            required
          />
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
          <div className="check-box">
            <InputField
              type="checkbox"
              name="is_admin"
              onChange={handleChange}
              value={1}
            />
          </div>
          <InputField type="submit" value="submit" />
        </form>
        <div className="other-options">
          <span>
            Already a user ?
            <Link className="link" to="/">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
