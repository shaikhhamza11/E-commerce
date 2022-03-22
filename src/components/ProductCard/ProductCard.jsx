import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { imgUrl, brandName, title, rating, price, gender } = product;
  return (
    <div className="product m-3-0 cards-shadow fw-bold">
      <img src={imgUrl} alt="loading..." />
      <div className="product-description">
        <span className="fs-m ">{brandName}</span>
        <h3>{title}</h3>
        <p className="fs-m mt-05 ">{gender}</p>
        <p className="fs-m  m-1-0 ">Rating:{rating}</p>
        <h4>{price} &#8377;</h4>
      </div>
      <i className="fa-solid fa-cart-shopping fa-2x icon-style cart"></i>
      <i className="fa-solid fa-heart fa-2x icon-style heart"></i>
    </div>
  );
};

export default ProductCard;
