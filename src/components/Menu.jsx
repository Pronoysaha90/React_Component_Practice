import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/55/Apple">Products</Link>
        </li>
        <li>
          <Link to="/contact/01745">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
