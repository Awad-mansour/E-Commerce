import React from "react";
import "./SectionTow.css";
import { useNavigate } from "react-router-dom";


const SectionTow = () => {

  
  const navigate = useNavigate(); 
  const handleNavigate = () => {
    navigate("/Shop");
  };
  
  return (
    <>
      <div className="section-tow-home ">
        <div className="sec-one">
          <img
            src={require("../images/Granite square side table 1.png")}
            alt=""
          />
          <h3>Side Table</h3>
          <p onClick={handleNavigate}>View More</p>
        </div>
        <div className="sec-tow">
          <img
            src={require("../images/Cloud sofa three seater + ottoman_3 1.png")}
            alt=""
          />
          <h3>Side Table</h3>
          <p onClick={handleNavigate}>View More</p>
        </div>
      </div>
    </>
  );
};

export default SectionTow;
