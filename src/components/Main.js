/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import CartList from "./CartList";
import "./Main.css";
import ProductList from "./Product";
export default function Main() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [carts, setcarts] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");

  function getAllCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }

  function getAllProducts(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }

  useEffect(() => {
    console.log("============USE EFFECT RUN========================");
    getAllCategories();
    if (selectedCategory === "") {
      getAllProducts("https://fakestoreapi.com/products");
    } else {
      getAllProducts(
        `https://fakestoreapi.com/products/category/${selectedCategory}`
      );
    }
  }, [selectedCategory]);

  function HandleselectCategory(e) {
    alert(e.target.value);
    if (e.target.value == "") {
      setselectedCategory(e.target.value);
      getAllProducts("https://fakestoreapi.com/products");
    } else {
      getAllProducts(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }

  function addToCart(e) {
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
      .then((res) => res.json())
      .then((data) => {
        let commonItem = carts.find((item) => item.id == data.id);

        if (commonItem != undefined) {
          // Create a new array with the updated item
          setcarts(
            carts.map((item) =>
              item.id === commonItem.id ? { ...item, qty: item.qty + 1 } : item
            )
          );
        } else {
          // Add the new item to the array
          setcarts([...carts, { ...data, qty: 1 }]);
        }
        alert("Update Cart");
      });
  }

  function removeFromCart(e) {
    alert(e.target.id);

    let findItem = carts.find((item) => item.id == e.target.id);

    if (findItem != undefined) {
      if (findItem.qty > 1) {
        findItem.qty--;
        let newItemsArray = [...carts];
        console.log(newItemsArray);
        setcarts(newItemsArray);
      } else {
        let newItemsArray = carts.filter((item) => item.id != e.target.id);
        setcarts(newItemsArray);
        console.log(newItemsArray);
      }
    }
  }

  return (
    <div className="">
      <div className="row">
        <div className="col-md-2">
          <h3 className="text-left bg-info p-1">Categories</h3>
          <div className="card mt-4">
            <select
              className="form-select"
              onChange={HandleselectCategory}
              defaultValue={selectedCategory}
            >
              <option value="">Select An Category</option>
              {category.map((c, i) => {
                return (
                  <option key={i} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 ">
          <h3 className="text-left bg-info p-1">All Products</h3>
          <div
            className="row"
            style={{ height: "90vh", width: "60vw", overflowY: "auto" }}
          >
            {products.map((product, index) => {
              return (
                <ProductList
                  addToCart={addToCart}
                  product={product}
                  key={index}
                />
              );
            })}
            \
          </div>
        </div>
        <div className="col-md-3  col-sm-12">
          <h3 className="text-left bg-info p-1">Cart Products</h3>
          <CartList cartItems={carts} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}
