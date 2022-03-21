import React from "react";
import './ProductCard.css'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
const {imgUrl,brandName,title,rating,price} =product
  return  (
    <div className="product mt-3 cards-shadow" >
          <img src={imgUrl} alt="loading..."
          />
          <div className="product-description">
              <span className="fs-m">{brandName}</span>
              <h3>{title}</h3>
              <p className="fs-m  m-1-0 fw-light">Rating:{rating}</p>
              <h4>{price} &#8377;</h4>
          </div>
          <i className="fa-solid fa-cart-shopping fa-2x icon-style cart"></i>
          <i className="fa-solid fa-heart fa-2x icon-style heart"></i> 
        </div>
  );
};

export default ProductCard;
