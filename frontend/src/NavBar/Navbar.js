import { Component } from "react";
import "./NavbarStyles.css";

function Navbar() {
  return (
    <nav>
      <a href="index.html"></a>

      <div>
        <ul id="navbar">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">About</a>
          </li>
          <li>
            <a href="/show">Recently Added</a>
          </li>
          <li>
            <a href="/new">Add new</a>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
