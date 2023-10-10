import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
    </div>
  );
}
