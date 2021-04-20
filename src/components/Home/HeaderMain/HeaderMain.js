import React from "react";
import "./headerMain.css";

const HeaderMain = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 style={{ fontSize: "80px" }}>WHERE DREAMS COME TRUE</h1>
        <button className='btn btn-primary' style={{ fontSize: "30px" }}>Hire us</button>
      </div>
    </div>
  );
};

export default HeaderMain;
