import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./package.css";

const Package = ({ packagee}) => {
  const { name, price, description,image } = packagee;
  const onSubmit = () => {
    const eventData = {
      name: name,
      price: price,
      description: description,
    };

    fetch(`https://hidden-mesa-38104.herokuapp.com/deleteOldOrder`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    const url = `https://hidden-mesa-38104.herokuapp.com/addNewOrder`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div style={{ margin: "10px auto", width: "70%" }} className=" row service">
      <div style={{padding:'0px 0px'}} className="col-md-6">
        {image ? (
          <img className="shaking"
            style={{ width: "100%" }}
            src={`data:image/png;base64,${image.img}`}
          />
        ) : (
          <img
            style={{ width: "100%" }}
            className="img-fluid shaking"
            src={`https://hidden-mesa-38104.herokuapp.com/${image.img}`}
            alt=""
          />
        )}
      </div>
      <div className="col-md-6 details">
        <h2 className="">{name}</h2>
        <h4>${price}</h4>
        <h5 className="desc text-muted">{description}</h5>
        <Link to="/checkout">
          {" "}
          <button onClick={onSubmit} className="btn btn-dark text-uppercase">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Package;
