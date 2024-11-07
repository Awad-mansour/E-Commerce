import React from "react";
import Navbar from "../Components/Navbar";
import SctionOneShop from "../ComponentForShop/SctionOneShop";
import SectionTowShop from "../ComponentForShop/SectionTowShop";
import SectionThreeShop from "../ComponentForShop/SectionThreeShop";
import Footer from "../Components/Footer";

const Shop = () => {
  return (
    <>
      <Navbar backgroundColor="#FFFFFF" />

      <SctionOneShop title="Shop">
        <span>
          Home <i class="fa-solid fa-angles-right"> </i>Shop
        </span>
      </SctionOneShop>

      <SectionTowShop />

      <SectionThreeShop />

      <Footer />
    </>
  );
};

export default Shop;
