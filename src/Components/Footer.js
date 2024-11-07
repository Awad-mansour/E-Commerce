import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <>
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h4>
                    400 University Drive Suite 200 Coral Gables, FL 33134 USA
                  </h4>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Shop
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      About
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Contact
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Help</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Payment Options
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Returns
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Privacy Policies
                    </a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Newsletter</h6>
                  <input
                    className="inpout-supscripe"
                    type="text"
                    placeholder="Enter Your Email Address"
                  />
                  <span>SUBSCRIBE</span>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            2022 Meubel House. All rights reverved
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              Developed By Awad Mansour{" "}
            </a>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer;
