import React from "react";
import "./SectionOneShop.css";

const SctionOneShop = ({ title, children }) => {
  return (
    <>
      <div className="section-one-shop">
        <img src={require("../images/Meubel House_Logos-05.png")} alt="" />
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default SctionOneShop;
