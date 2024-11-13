import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LogIn.css";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import SctionOneShop from "../ComponentForShop/SctionOneShop";
import Footer from "../Components/Footer";

const LogIn = () => {
  const aarUsers = [
    { username: "admin", password: "12345" },
    { username: "superadmin", password: "54321" },
    { username: "user", password: "11111" },
    { username: "manager", password: "44444" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("username", JSON.stringify(username));
    setUsername({
      username: "",
    });
    localStorage.setItem("password", JSON.stringify(password));
    setUsername({
      password: "",
    });
    const user = aarUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      Swal.fire("Login Successful!").then(() => {
        navigate("/");
      });
    } else {
      Swal.fire("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar backgroundColor="#ffff" />

      <SctionOneShop title="My Account">
        <span>
          Home <i class="fa-solid fa-angles-right"> </i>My Account
        </span>
      </SctionOneShop>
      <div className="big-div-login">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn-login" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default LogIn;
