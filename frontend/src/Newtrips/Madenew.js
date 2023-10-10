import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./newtrips.css";
import Navbar from "../NavBar/Navbar";
function Madenew() {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();

  const handlesavebook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        navigate("/show");
      })
      .catch((error) => {
        alert("An error occured");
        console.log(error);
      });
  };
  return (
    <>
      <Navbar />
      <div className="containers">
        {/* <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setauthor(e.target.value)}
      />
      <input
        type="number"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
      />
      <button onClick={handlesavebook}>Save</button> */}

        <div className="header">
          <div className="text">ADD NEW TRIP</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder=" Place Name"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>

          <div className="input">
            <input
              type="email"
              placeholder=" Image url"
              value={author}
              onChange={(e) => setauthor(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="number"
              placeholder=" Price"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>
        </div>

        <div className="submit-container2">
          <div className="submit" onClick={() => handlesavebook()}>
            Save
          </div>
        </div>
      </div>
    </>
  );
}

export default Madenew;
