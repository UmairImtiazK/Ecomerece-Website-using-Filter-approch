import React from "react";
import "./Mainbar.css";

export default function MainBar({ handleClick }) {
  return (
    <div className="mainBar">
      <h1>Recomended</h1>
      <div className="recomendedBtns">
        <button className="btn" value={""} onClick={ handleClick}>
          All product
        </button>
        <button className="btn" value={"Nike"} onClick={ handleClick}>
          Nike
        </button>
        <button className="btn" value={"Adidas"} onClick={ handleClick}>
          Adidas
        </button>
        <button className="btn" value={"Puma"} onClick={ handleClick}>
          Puma
        </button>
        <button className="btn" value={"Vans"} onClick={ handleClick}>
          Vans
        </button>
      </div>
    </div>
  );
}
