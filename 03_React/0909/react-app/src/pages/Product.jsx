import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const fetchProduct = () => {
  return fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
};

const Product = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });
  const navigate = useNavigate();

  const clickHandler = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching products</div>;

  return (
    <div className="wrapper">
      {data?.map((data) => (
        <button
          className="productBoxBtn"
          onClick={() => clickHandler(data.id)}
          key={data.id}
        >
          <img className="productImg" src={data.image} alt="Product" />
          <br />
          <div className="productTitle">{data.title}</div>
          <br />
          <div className="productCategory">{data.category}</div>
          <br />
          <div className="productPrice">Price : ${data.price}</div>
        </button>
      ))}
    </div>
  );
};

export default Product;
