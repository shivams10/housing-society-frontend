import React, { useState,useEffect,useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import InputField from "../../components/inputfield/InputField.js";
import "./Login.css";
import { UserContext } from "../../contexts/UserContext";

const BASE_URL = process.env.REACT_APP_BASE_URL
const defaultFormField = {
  email: "",
  password: "",
};

const Login = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    !token &&
      Axios.get(`${process.env.REACT_APP_BASE_URL}/user`, config)
        .then((response) => {
          setCurrentUser({ ...response.data });
        })
        .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${BASE_URL}/user/login`,{
      ...formField
    })
    .then((response) => {
      if (typeof response.data === "object") {
        console.log(response.data)
        const { id, firstname, lastname, contact, email, isadmin } =
          response.data.token;
        setCurrentUser({
          id,
          firstname,
          lastname,
          contact,
          email,
          isadmin,
        });
        let token = response.data.token;
        sessionStorage.setItem("accessToken", token);
        console.log("logged in")
        navigate("/")
      }
    })
    .catch((error) => {
      if (error.code === "ERR_NETWORK") {
        console.log("Couldn't connect to server");
      } else if (
        error.response.status === 403 ||
        error.response.status === 401
      ) {
        console.log("Incorrect username or password!");
      }
      if(error.response.status === 404){
        console.log("User not found");
      }
    })
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
