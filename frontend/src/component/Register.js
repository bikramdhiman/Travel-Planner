import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Register() {
  //name
  const [name, setname] = useState("");
  //email
  const [email, setemail] = useState("");
  //password
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
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
      <p>already have an account</p>
      <Link to="/login">Login</Link>

      {/* <input type="submit" onClick={submit} value="submit" /> */}
    </form>
  );
}

export default Register;
