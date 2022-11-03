import { useAuth } from "../../contexts/UserContext";
import "./Table.css"

import { useEffect } from "react";
import Axios from "axios";

const UserTable = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { allUsers, setAllUser } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      Headers: { Authorization: `Bearer ${token}` },
    };
    token &&
      Axios.get(`${BASE_URL}/user`, config)
        .then((response) => {
          setAllUser(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className="table">
    <table>
      <tr>
        <th>User id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>contact</th>
        <th>Email</th>
      </tr>
      {allUsers.length > 0 &&
        allUsers?.map((user) => {
          return (
            <tr className="" key={user.id}>
              <td>{user.id}</td>
              <td> {user.firstname}</td>
              <td> {user.lastname}</td>
              <td> {user.contact}</td>
              <td> {user.email}</td>
            </tr>
          );
        })}
    </table>
    </div>
  );
};

export default UserTable;
