import React from "react";
import "./Sidebar.css";
import { BsCart4 } from "react-icons/bs";

export default function SideBar({handleChange}) {
  return (
    <div className="SideBar">
      <div className="chartCont">
        <button className="btn">
          <BsCart4 className="icon" />
        </button>
      </div>
      <div className="categoryParent">
        <div className="category">
          <h1>Category</h1>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="category"
                value={""}
                onChange={ handleChange}
              />
              <span className="checkmark"></span>
              All
            </label>
          </div>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="category"
                value={"sneakers"}
                onChange={ handleChange}
              />
              <span className="checkmark"></span>
              Sneakers
            </label>
          </div>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="category"
                value={"flats"}
                onChange={ handleChange}
                />
              <span className="checkmark"></span>
              Flats
            </label>
          </div>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="category"
                value={"sandals"}
                onChange={ handleChange}
                />
              <span className="checkmark"></span>
              Sandals
            </label>
          </div>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="category"
                value={"heels"}
                onChange={ handleChange}
                />
              <span className="checkmark"></span>
              Heels
            </label>
          </div>
        </div>
     </div>

        <div className="priceParent">
        <div className="category">
          <h1>Price</h1>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="price"
                value={''}
                onChange={ handleChange}
              />
              <span className="checkmark"></span>
              All
            </label>
          </div>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="price"
                value={'0'}
                onChange={ handleChange}
              />
              <span className="checkmark"></span>
              $0-$50
            </label>
          </div>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="price"
                value={'50'}
                onChange={ handleChange}
              />
              <span className="checkmark"></span>
              $50-$100
            </label>
          </div>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="price"
                value={"100"}
                onChange={ handleChange}
              />
              <span className="checkmark"></span>
              $100-$150
            </label>
          </div>
          <div className="categoryComp">
            <label className="container">
              <input
                type="radio"
                name="price"
                value={"150"}
                onChange={ handleChange}
                />
              <span className="checkmark"></span>
              Over $150
            </label>
          </div>
        </div>
    </div>
    </div>

  );
}
