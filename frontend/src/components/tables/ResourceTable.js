import { useContext, useEffect } from "react";
import Axios from "axios";
import { useAuth } from "../../contexts/UserContext";

const UserTable = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { allResources, setAllResources } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      Headers: { Authorization: `Bearer ${token}` },
    };
    token &&
      Axios.get(`${BASE_URL}/resources`, config)
        .then((response) => {
          setAllResources(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div>
      {allResources.length>0 &&
        allResources?.map((resource) => {
          return (
            <h2 key={resource.id}>
              {resource.id} {resource.resourcename} {resource.status}
            </h2>
          );
        })}
    </div>
  );
};

export default UserTable;
