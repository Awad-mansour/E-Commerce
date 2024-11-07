import React from "react";
import "./SectionOne.css";

const SectionOne = () => {
  return (
    <>
      <div className="Section-one-home">
        <div className="content">
          <h1>
            Rocket single
            <br />
            seater
          </h1>
          <p>Shop Now</p>
        </div>
        <div>
          <img src={require("../images/Rocket single seater 1.png")} alt="" />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
