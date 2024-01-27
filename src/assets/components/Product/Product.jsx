import React from "react";
import "./Product.css";
import { AiFillStar } from "react-icons/ai";

export default function Product({img,title,reviews,newPrice, prevPrice,}) {
  return<div className="product" >
    <div className="imgCont">
      <img className="Image" src={img} alt="" />
    </div>
    <div className="productDetails">
      <h1 className="title">{title}</h1>
      <p className="reviews">
        <span>
          <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiFillStar className="star" />
        </span>
        ({reviews})
      </p>
      <div className="priceCont">
        <p className="price">
          <span className="oldprice">{prevPrice}</span> {newPrice}
        </p>
        <p>🔒</p>
      </div>
    </div>
  </div>;
}
