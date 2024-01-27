import React from "react";
import { BsHeart, BsCart3, BsPersonPlus } from "react-icons/bs";
import "./NavBar.css";

export default function NavBar({ query, handleInputChange }) {
  return (
    <div className="NavBar">
      <div className="searchBox">
        <input
          type="text"
          className="Input"
          placeholder="Enter Your Search Shoes"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="NavComp">
        <button className="btn">
          <BsHeart className="icon" />
        </button>
        <button className="btn">
          <BsCart3 className="icon" />
        </button>
        <button className="btn">
          <BsPersonPlus className="icon" />
        </button>
      </div>
    </div>
  );
}
