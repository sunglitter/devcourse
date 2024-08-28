import React from "react";
import "./FoodMenu.css";

function FoodMenu(props) {
  const { img, imgAlt, name, genre, price } = props;
  return (
    <div className="foodList">
      <img className="foodImg" src={img} alt={imgAlt} />
      <h1>{name}</h1>
      <h3>{genre}</h3>
      <h2>{price}</h2>
    </div>
  );
}

export default FoodMenu;
