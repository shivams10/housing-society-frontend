import { useEffect } from "react";
import Axios from "axios";

import { useAuth } from "../../contexts/UserContext";


const OccupancyTable = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { allOccupancy, setAllOccupancy } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (token) {
      Axios.get(`${BASE_URL}/occupancies`, config)
        .then((response) => {
          setAllOccupancy(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="table">
      <header className="table-heading" >
        <h2>Occupancies Table</h2>
      </header>
      <table>
        <tr>
          <th>Occpancy id</th>
          <th>Resource id</th>
          <th>User id</th>
          <th>Occupancy Status</th>
          <th>Occupied Date</th>
        </tr>
        {allOccupancy.length > 0 &&
          allOccupancy?.map((occupancy) => {
            return (
              <tr className="" key={occupancy.id}>
                <td>{occupancy.id}</td>
                <td> {occupancy.resource_id}</td>
                <td> {occupancy.user_id}</td>
                <td> {occupancy.is_available ? "available" : "occupied"}</td>
                <td> {occupancy.occupancy_date}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default OccupancyTable;
