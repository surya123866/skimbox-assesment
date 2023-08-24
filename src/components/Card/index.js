import React from "react";
import "./index.css";

function index() {
  return (
    <div className="all-cards-continer">
      <div className="card-container">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <circle
              cx="7.92151"
              cy="7.25273"
              r="6.77852"
              stroke="#D9D9D9"
              stroke-width="0.903803"
            />
          </svg>
        </div>
        <div>
          <h1 className="text pair">1 Pair</h1>
          <h1 className="text product">DKK 195.00</h1>
        </div>
        <div>
          <h1 className="text offer">40% off</h1>
        </div>
      </div>
      <div className="active-card-container">
        <div className="card-product-container">
          <div className="option-constiner">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="#CD264F"
              >
                <circle
                  cx="7.92151"
                  cy="7.25273"
                  r="6.77852"
                  stroke="#CD264F"
                  stroke-width="0.903803"
                />
              </svg>
            </div>
            <div>
              <h1 className="text pair">1 Pair</h1>
              <h1 className="text product">DKK 195.00</h1>
            </div>
          </div>
          <div>
            <h1 className="most-popular-text">Most Popular</h1>
            <h1 className="text offer">40% off</h1>
          </div>
        </div>
        <div className="active-card-details-container">
          <div className="serial-num-container">
            <h1 className="serial-num">#1</h1>
            <h1 className="serial-num">#2</h1>
          </div>
          <div className="Size-bg-container">
            <h1 className="size-text">Size</h1>
            <div className="size-container">
              <h1 className="size-text">S</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="5"
                viewBox="0 0 6 5"
                fill="none"
              >
                <path
                  d="M3.26369 4.7583L0.915539 0.691186L5.61184 0.691187L3.26369 4.7583Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="size-container">
              <h1 className="size-text">S</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="5"
                viewBox="0 0 6 5"
                fill="none"
              >
                <path
                  d="M3.26369 4.7583L0.915539 0.691186L5.61184 0.691187L3.26369 4.7583Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="Size-bg-container">
            <h1 className="size-text">Color</h1>
            <div className="size-container">
              <h1 className="size-text">Color</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="5"
                viewBox="0 0 6 5"
                fill="none"
              >
                <path
                  d="M3.26369 4.7583L0.915539 0.691186L5.61184 0.691187L3.26369 4.7583Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="size-container">
              <h1 className="size-text">Color</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="5"
                viewBox="0 0 6 5"
                fill="none"
              >
                <path
                  d="M3.26369 4.7583L0.915539 0.691186L5.61184 0.691187L3.26369 4.7583Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-container">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <circle
              cx="7.92151"
              cy="7.25273"
              r="6.77852"
              stroke="#D9D9D9"
              stroke-width="0.903803"
            />
          </svg>
        </div>

        <div>
          <h1 className="text pair">3 Pair</h1>
          <h1 className="text product">DKK 528.00</h1>
        </div>
        <div>
          <h1 className="text offer">60% off</h1>
        </div>
      </div>
    </div>
  );
}

export default index;
