import React from "react";
import Navbar from "../Components/Navbar";
import SectionOne from "../ComponentsForHome/SectionOne";
import SectionTow from "../ComponentsForHome/SectionTow";
import SectionThree from "../ComponentsForHome/SectionThree";
import SectionFour from "../ComponentsForHome/SectionFour";
import SectionBlog from "../ComponentsForHome/SectionBlog";
import SectionIsta from "../ComponentsForHome/SectionIsta";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <SectionOne />

      <SectionTow />

      <SectionThree />

      <SectionFour />

      <SectionBlog />

      <SectionIsta />

      <Footer />
    </div>
  );
};

export default Home;
