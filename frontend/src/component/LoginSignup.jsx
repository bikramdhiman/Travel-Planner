import React from "react";
import { useState } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001", // Use HTTP for local development
    // Other Axios configuration options
  });
  const [action, setAction] = useState("Sign up");
  const navigate = useNavigate();
  //name
  const [name, setname] = useState("");
  //email
  const [email, setemail] = useState("");
  //password
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    // e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    setname("");
    setemail("");
    setpassword("");
  };
  const handleSubmit2 = (e) => {
    // e.preventDefault();
    axiosInstance
      .post("/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="containers">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
      </div>
      {/* {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password. <span>Click here !!</span></div>} */}

      <div className="submit-container">
        <div className="submit" onClick={() => handleSubmit()}>
          Submit
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
            handleSubmit2();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
