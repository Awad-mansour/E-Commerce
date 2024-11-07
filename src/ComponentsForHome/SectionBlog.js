import React from "react";
import "./SectionBlog.css";

const SectionBlog = () => {
  return (
    <>
      <div className="main-d">
        <div className="cont-blog">
          <h1>Our Blogs</h1>
          <p>Find a bright ideal to suit your taste with our great selection</p>
        </div>
        <div className=" cont-bic-blog  container">
          <div>
            <img src={require("../images/Rectangle 13 (1).png")} alt="" />
            <p>Going all-in with millennial design</p>
            <span className="read-more">Read More</span>
            <br />
            <span>
              <i class="fa-regular fa-clock"></i>5 min{" "}
            </span>
            <span>
              <i class="fa-regular fa-calendar"></i> 12th Oct 2022
            </span>
          </div>
          <div>
            <img src={require("../images/Rectangle 14.png")} alt="" />
            <p>Going all-in with millennial design</p>
            <span className="read-more">Read More</span>
            <br />
            <span>
              <i class="fa-regular fa-clock"></i>5 min{" "}
            </span>
            <span>
              <i class="fa-regular fa-calendar"></i> 12th Oct 2022
            </span>
          </div>
          <div>
            <img src={require("../images/Rectangle 15.png")} alt="" />
            <p>Going all-in with millennial design</p>
            <span className="read-more">Read More</span>
            <br />
            <span>
              <i class="fa-regular fa-clock"></i>5 min{" "}
            </span>
            <span>
              <i class="fa-regular fa-calendar"></i> 12th Oct 2022
            </span>
          </div>
        </div>
        <p className="pra-view">View All Post</p>
      </div>
    </>
  );
};

export default SectionBlog;
