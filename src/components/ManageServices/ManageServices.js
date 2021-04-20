import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import ManageService from "../ManageService/ManageService";
import "./manageServices.css";

const ManageServices = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hidden-mesa-38104.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <section className="container row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 col-sm-6 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Manage your services</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {products.map((product) => (
            <ManageService product={product}></ManageService>
          ))}
        </table>
      </div>
    </section>
  );
};

export default ManageServices;
