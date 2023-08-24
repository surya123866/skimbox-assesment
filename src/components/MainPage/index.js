import React from "react";
import "./index.css";
import Card from "../Card";

function index() {
  return (
    <div className="main-conatiner">
      <div className="cards-container">
        <div className="heading-container">
          <hr className="heading-line" />
          <h1 className="heading">Bundle & Save</h1>
          <hr className="heading-line" />
        </div>
        <Card />
        <div className="check-out-container">
          <h1 className="free-shipping-text">Free 2 Day Shipping</h1>
          <h1 className="product-text">Total : DKK 360.00</h1>
        </div>
        <button className="button">+ Add to Cart</button>
      </div>
    </div>
  );
}

export default index;
