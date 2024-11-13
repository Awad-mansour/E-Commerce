import React from "react";
import "./SectionFour.css";
import { useNavigate } from "react-router-dom";

const SectionFour = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/Shop"); // التنقل إلى صفحة المتجر عند النقر على الزر
  };

  return (
    <div className="section-four-home">
      <div>
        <img src={require("../images/Asgaard sofa 1.png")} alt="Asgaard Sofa" />
      </div>
      <div className="cont-sec-four-home">
        <span>New Arrivals</span>
        <h2>Asgaard Sofa</h2>
        <button onClick={handleOrderNow}>Order Now</button>
      </div>
    </div>
  );
};

export default SectionFour;
