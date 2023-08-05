/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default function ({ cartItems, removeFromCart }) {
  return (
    <>
      <ul className="list-group" style={{ height: "90vh", overflowY: "auto" }}>
        {cartItems.map((product, index) => {
          return (
            <li className="list-group-item" key={index}>
              <div className="card d-flex flex-row m-2 p-2 justify-content-between">
                <img
                  src={product.image}
                  width="100"
                  height="100"
                  alt={product.title}
                />
                <span className="p-2">{product.title}</span>
                <i
                  onClick={removeFromCart}
                  id={product.id}
                  className="bi bi-trash3"
                ></i>
              </div>
              <h6>{product.qty}</h6>
            </li>
          );
        })}
      </ul>
    </>
  );
}
