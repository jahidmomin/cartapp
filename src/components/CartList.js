/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default function ({ cartItems, removeFromCart }) {
  let total = 0;
  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <ul className="list-group" style={{ overflowY: "auto" }}>
            {cartItems.map((product, index) => {
               total += product.qty * product.price;
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
          <p className="p-3">
            <span>Total Amount : Rs {total}</span>
          </p>
        </>
      ) : (
        <h3 className="p-3">Empty Cart</h3>
      )}
    </>
  );
}
