import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUser] = useState([]);
  const [allResources, setAllResources] = useState([]);
  const [allOccupancy, setAllOccupancy] = useState([]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUser,
        allResources,
        setAllResources,
        allOccupancy,
        setAllOccupancy
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
