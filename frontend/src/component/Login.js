import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  //email
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001", // Use HTTP for local development
    // Other Axios configuration options
  });
  const [email, setemail] = useState("");
  //password
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Login;
