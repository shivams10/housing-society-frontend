import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Routers from "./Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <Router>
      <Routers />
    </Router>
  </UserProvider>
);
