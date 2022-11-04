import {Routes, Route} from "react-router-dom";
import UserTable from './components/tables/UserTable';
import ResourceTable from "./components/tables/ResourceTable"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import OccupancyTable from './components/tables/OccupancyTable';
import ProtectedRoute from "./components/tables/protectedRoute/ProtectedRoute";

import React from 'react';

function Routers() {
  return (
    <Routes>
        <Route path="/home" element={<ProtectedRoute Component={Home}/> } >
          <Route path='users' element={<ProtectedRoute Component={UserTable} />} />
          <Route path='resources' element={<ProtectedRoute Component={ResourceTable} />} />
          <Route path='occupancies' element={<ProtectedRoute Component={OccupancyTable} />} />
        </Route>
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
    </Routes>
    )
}

export default Routers;