import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider=({ children }) =>{
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUser] = useState([]);
  const [allResources, setAllResources] =useState([]);

  return <UserContext.Provider value={{ currentUser, setCurrentUser ,allUsers, setAllUser, allResources, setAllResources}}> {children} </UserContext.Provider>;
}

export const useAuth = () => React.useContext(UserContext)