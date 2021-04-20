import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

const Orders = ({ orders }) => {
  const [status, setStatus] = useState("");
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(loggedInUser);

  useEffect(() => {
    fetch("https://hidden-mesa-38104.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data);
      });
  }, []);

  const handleBlur = (event, id) => {
    setStatus(event.target.value);
    console.log(id);
    const statuss = {
      status: event.target.value,
    };
    fetch(`https://hidden-mesa-38104.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statuss),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Email
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            Price
          </th>
          <th className="text-secondary" scope="col">
            Status
          </th>
          {isAdmin && (
            <th className="text-secondary" scope="col">
              Change Status
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{order.Shipment.name}</td>
            <td>{order.email}</td>
            <td>{order.product.name}</td>
            <td>${order.product.price}</td>
            <td>{status || order.status}</td>
            {isAdmin && (
              <td>
                <div className="col-4">
                  <select
                    onChange={(event) => handleBlur(event, order._id)}
                    className="form-control"
                    name="gender"
                  >
                    <option disabled={true} value="Not set">
                      Select Gender
                    </option>
                    <option value="pending">pending</option>
                    <option value="Processing">processing</option>
                    <option value="Done">done</option>
                  </select>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
