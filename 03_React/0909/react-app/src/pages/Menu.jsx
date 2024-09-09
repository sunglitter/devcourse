import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/product">
        Product
      </Link>
    </div>
  );
};

export default Menu;
