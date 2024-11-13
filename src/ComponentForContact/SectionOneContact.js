import React, { useState } from "react";
import "./SectionOneCotact.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SectionOneContact = () => {
  const navigat = useNavigate();

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("contactForm", JSON.stringify(contactForm));
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    Swal.fire("Your Message is Send").then(() => {
      navigat ("/");
    });
  };

  return (
    <>
      <div className="head-contact container">
        <h1>Get In Touch With Us</h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="big-div-contact">
        <div className="main-div-contact">
          <div>
            <h2>
              <i class="fa-solid fa-location-dot"></i> Address{" "}
            </h2>
            <p>
              236 5th SE Avenue, New York <br /> NY10000, United States
            </p>
          </div>
          <div>
            <h2>
              <i class="fa-solid fa-phone"></i> Phone{" "}
            </h2>
            <p>
              Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
            </p>
          </div>
          <div>
            <h2>
              <i class="fa-solid fa-clock"></i> Working Time{" "}
            </h2>
            <p>
              Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        <form className="info-submit" onSubmit={handelSubmit} action="">
          <label htmlFor="name"> your Name</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Abc"
            required
            value={contactForm.name}
            onChange={(e) => {
              setContactForm({ ...contactForm, name: e.target.value });
            }}
          />
          <br />
          <br />
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Abc@mail.com"
            required
            value={contactForm.email}
            onChange={(e) => {
              setContactForm({ ...contactForm, email: e.target.value });
            }}
          />
          <br />
          <br />
          <label htmlFor="subject">Subject</label>
          <br />
          <input
            type="text"
            id="subject"
            placeholder="This is an optional"
            value={contactForm.subject}
            onChange={(e) => {
              setContactForm({ ...contactForm, subject: e.target.value });
            }}
          />
          <br />
          <br />
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            type="text"
            id="message"
            placeholder="Hi! i’d like to ask about"
            required
            value={contactForm.message}
            onChange={(e) => {
              setContactForm({ ...contactForm, message: e.target.value });
            }}
          />
          <br />
          <br />
          <button type="submit">Sbumit</button>
        </form>
      </div>
      <br />
      <br />
    </>
  );
};

export default SectionOneContact;
