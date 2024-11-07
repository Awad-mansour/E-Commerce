import React from "react";
import Navbar from "../Components/Navbar";
import SctionOneShop from "../ComponentForShop/SctionOneShop";

const Contact = () => {
  return (
    <>
      <Navbar backgroundColor="#FFFFFF" />

      <SctionOneShop title="Contact">
        <span>
          Home <i class="fa-solid fa-angles-right"> </i>Contact
        </span>
      </SctionOneShop>
    </>
  );
};

export default Contact;
