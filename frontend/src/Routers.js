import React from 'react';
import {Routes, Route} from "react-router-dom";
import UserTable from './components/tables/UserTable';
import ResourceTable from "./components/tables/ResourceTable"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function Routers() {
  return (
    <Routes>
        <Route path="/home" element={ <Home/> } >
          {/* <Route index element={<h1>Users</h1>} /> */}
          <Route path='user' element={<UserTable />} />
          <Route path='resource' element={<ResourceTable />} />
          <Route path='occupancy' element={<h1>Occupancies</h1>} />
        </Route>
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
    </Routes>
    )
}

export default Routers;