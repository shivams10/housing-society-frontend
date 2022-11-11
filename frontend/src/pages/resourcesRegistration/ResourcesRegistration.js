import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
 
import { useAuth } from "../../contexts/UserContext";
import Navbar from "../../components/navbar/Navbar";
import InputField from "../../components/inputfield/InputfFeld.js";
import FlashAlert from "../../components/flashAlert/FlashAlert";

const defaultFormField = {
  user_id: 0,
  resource_id: 0,
  occupancy_date: "",
};

const ResourcesRegistration = () => {

  const navigate = useNavigate();

  const [formField, setFormField] = useState(defaultFormField);
  const { currentUser } = useAuth();
  const { user_id, resource_id, occupancy_date } = formField;
  const [showModal, setShowModal] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [currentUserId, setCurrentUserId] = useState(0);

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (currentUser) {
      if (token) {
        const decode = parseJwt(token);
        setCurrentUserId(decode.result.id);
      }
    }
  }, [currentUserId]);

  const modalAlert = (message) => {
    setModalValue(message);
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${BASE_URL}/occupancies`, {
      ...formField,
      user_id: currentUserId,
    })
      .then((res) => {
        if (res.status === 200) {
          modalAlert("YAY Resource Booked");
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          modalAlert("Invalid user Id or resource id");
        }
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-4/12 py-5 my-20 mx-auto rounded-2xl">
        <header className="m-4 text-white text-2xl">Book Resources</header>
        <FlashAlert show={showModal} value={modalValue} type="success" />
        <form className="flex flex-col mx-4" onSubmit={handleSubmit}>
          <InputField
            name="resource_id"
            type="number"
            value={resource_id}
            onChange={handleChange}
            required
          />
          <InputField
            name="occupancy_date"
            type="date"
            value={occupancy_date}
            onChange={handleChange}
            required
          />
          <InputField type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default ResourcesRegistration;
