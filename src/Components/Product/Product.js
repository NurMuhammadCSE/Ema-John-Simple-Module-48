import React, { useState } from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
  // const { img, name, price, seller, ratings } = props.product;
  const { img, name, price, seller, ratings } = product;
  //   console.log(props);
  //   const { product, handleAddToCart } = props;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="cart-info">
        <p className="product-name">{name}</p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} Star</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
