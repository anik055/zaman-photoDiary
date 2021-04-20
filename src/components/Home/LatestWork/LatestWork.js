import React from "react";
import "./latestWork.css";

const LatestWork = () => {

  return (
    <div>
      <h1 className="text-primary my-4">OUR LATEST WORK</h1>
      <div className="work1Img hero-image">
        <div className="hero-text">
          <h1 style={{ fontSize: "80px" }}>WEDDING</h1>
        </div>
      </div>
      <div className="work2Img hero-image ">
        <div className="hero-text">
          <h1 className="text-dark" style={{ fontSize: "80px" }}>BIRTHDAY</h1>
        </div>
      </div>
      <div className="work3Img hero-image">
        <div className="hero-text">
          <h1 style={{ fontSize: "80px" }}>CONCERT</h1>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
