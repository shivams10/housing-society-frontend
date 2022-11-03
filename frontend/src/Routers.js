import {Routes, Route} from "react-router-dom";
import UserTable from './components/tables/UserTable';
import ResourceTable from "./components/tables/ResourceTable"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import OccupancyTable from './components/tables/OccupancyTable';

import React from 'react';

function Routers() {
  return (
    <Routes>
        <Route path="/home" element={ <Home/> } >
          <Route path='user' element={<UserTable />} />
          <Route path='resource' element={<ResourceTable />} />
          <Route path='occupancy' element={<OccupancyTable />} />
        </Route>
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
    </Routes>
    )
}

export default Routers;