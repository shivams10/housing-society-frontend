import { useAuth } from "../../contexts/UserContext";
import "./Table.css";

import { useEffect } from "react";
import Axios from "axios";

const ResourceTable = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { allResources, setAllResources } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if(token){
      Axios.get(`${BASE_URL}/resources`, config)
        .then((response) => {
          setAllResources(response.data.data);
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
        <th>Resource id</th>
        <th>Resource Name</th>
        <th>Resource Status</th>
      </tr>
      {allResources.length > 0 &&
        allResources?.map((resource) => {
          return (
            <tr className="" key={resource.id}>
              <td>{resource.id}</td>
              <td> {resource.resource_name}</td>
              <td> {resource.status}</td>
            </tr>
          );
        })}
    </table>
    </div>
  );
};

export default ResourceTable;
