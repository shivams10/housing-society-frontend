import { useAuth } from "../../contexts/UserContext";
import "./Table.css";

import { useEffect } from "react";
import Axios from "axios";

const UserTable = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { allUsers, setAllUser } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (token) {
      Axios.get(`${BASE_URL}/users`, config)
        .then((response) => {
          setAllUser(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="table">
      <table>
        <tr>
          <th>User id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
        {allUsers.length > 0 &&
          allUsers?.map((user) => {
            return (
              <tr className="" key={user.id}>
                <td>{user.id}</td>
                <td> {user.first_name}</td>
                <td> {user.last_name}</td>
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
