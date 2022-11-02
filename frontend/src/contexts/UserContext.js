import React, { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: {
    id: null,
    firstname: null,
    lastname: null,
    contact: null,
    email: null,
    isadmin: null,
  },
  setCurrentUser: () => null,
});

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}