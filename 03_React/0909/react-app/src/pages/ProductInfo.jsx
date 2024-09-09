import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./ProductInfo.css";

const fetchProduct = (productId) => {
  return fetch(`https://fakestoreapi.com/products/${productId}`).then(
    (response) => response.json()
  );
};

const ProductInfo = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading product information</div>;

  if (!data) return <div>No product found</div>;

  return (
    <div className="infoWrapper">
      <img className="infoImg" src={data.image} alt="Product" />
      <div className="infoTitle">{data.title}</div>
      <div className="infoCategory">{data.category}</div>
      <div className="infoDescription">{data.description}</div>
      <div className="infoPrice">{data.price}</div>
    </div>
  );
};

export default ProductInfo;
