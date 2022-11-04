import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
      <Component />
  );
};

export default ProtectedRoute;
