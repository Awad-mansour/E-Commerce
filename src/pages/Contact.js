import React from "react";
import Navbar from "../Components/Navbar";
import SctionOneShop from "../ComponentForShop/SctionOneShop";
import SectionOneContact from "../ComponentForContact/SectionOneContact";
import SectionThreeShop from "../ComponentForShop/SectionThreeShop";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar backgroundColor="#FFFFFF" />

      <SctionOneShop title="Contact">
        <span>
          Home <i class="fa-solid fa-angles-right"> </i>Contact
        </span>
      </SctionOneShop>

      <SectionOneContact/>

      <SectionThreeShop/>

      <Footer/>
    </>
  );
};

export default Contact;
