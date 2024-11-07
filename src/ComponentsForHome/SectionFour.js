import React from "react";
import "./SectionFour.css";

const SectionFour = () => {
  return (
    <>
      <div className="section-four-home">
        <div>
          <img src={require("../images/Asgaard sofa 1.png")} alt="" />
        </div>
        <div className="cont-sec-four-home">
          <span>New Arrivals</span>
          <h2>Asgaard sofa</h2>
          <button>Order Now</button>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
