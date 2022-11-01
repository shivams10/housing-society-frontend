import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function Routers() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
    </Routes>
    )
}

export default Routers;