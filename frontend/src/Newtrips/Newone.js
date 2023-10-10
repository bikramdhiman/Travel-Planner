import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

function Newone() {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setbooks(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div>
        <Navbar />

        <div>
          <div className="container">
            <div className="cards">
              {books.map((book, index) => (
                <div className="card">
                  <img src={book.author} className="image" alt={book.author} />
                  <p>{book.pulishYear}</p>
                  <div className="tour-info">
                    <div className="tour-details">
                      <h4 className="tour-price">{book.title}</h4>
                      <h4 className="tour-name">${book.publishYear}</h4>
                    </div>
                    <div className="description">
                      <p>Maximum Limit : 8</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn-red" onClick={() => removetour(id)}>
        Not Interest
      </button> */}
    </div>
  );
}

export default Newone;
