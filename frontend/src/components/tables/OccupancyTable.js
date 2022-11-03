import { useAuth } from "../../contexts/UserContext";

import { useEffect } from "react";
import Axios from "axios";

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
      Axios.get(`${BASE_URL}/occupancy`, config)
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
                <td> {occupancy.resourceId}</td>
                <td> {occupancy.userId}</td>
                <td> {occupancy.isAvailable ? "available" : "occupied"}</td>
                <td> {occupancy.occupancyDate}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default OccupancyTable;
