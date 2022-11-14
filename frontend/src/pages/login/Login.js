import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import InputField from "../../components/inputfield/InputfFeld.js";
import "./Login.css";
import { useAuth } from "../../contexts/UserContext";
import FlashAlert from "../../components/flashAlert/FlashAlert";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const defaultFormField = {
  email: "",
  password: "",
};

const Login = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  const { currentUser ,setCurrentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [modalValue, setModalValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };
  const modalAlert = (message) => {
    setModalValue(message);
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${BASE_URL}/users/login`, {
      ...formField,
    })
      .then((response) => {

        if (typeof response.data === "object") {
          setCurrentUser({...response.data.data});

          let token = response.data.token;
          localStorage.setItem("accessToken", token);
          navigate("/home");
        }
      })
      .catch((error) => {
        if (error.code === 501) {
          modalAlert("Something went wrong!");
        } else if (
          error.response.status === 403 ||
          error.response.status === 401
        ) {
          modalAlert("Incorrect username or password!");
        }
        if (error.response.status === 404) {
          modalAlert("User Not found!");
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <header>
          <h1 className="page-heading">Welcome! Login</h1>
          <FlashAlert show={showModal} value={modalValue} />
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
      </div>
    </>
  );
};

export default Login;
