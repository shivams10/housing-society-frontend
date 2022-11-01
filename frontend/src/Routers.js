import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function Routers() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } >
          {/* <Route index element={<h1>Users</h1>} /> */}
          <Route path='user' element={<h1>Users</h1>} />
          <Route path='resource' element={<h1>Resources</h1>} />
          <Route path='occupancy' element={<h1>Occupancies</h1>} />
        </Route>
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
    </Routes>
    )
}

export default Routers;