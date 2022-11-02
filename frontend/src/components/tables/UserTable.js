import { useEffect } from "react";
import Axios from "axios";
import { useAuth } from "../../contexts/UserContext";

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
    <div>
      {allUsers.length>0 &&
        allUsers?.map((user) => {
          return (
            <h2 key={user.id}>
              {user.id} {user.firstname} {user.lastname} {user.contact}{" "}
              {user.email}
            </h2>
          );
        })}
    </div>
  );
};

export default UserTable;
