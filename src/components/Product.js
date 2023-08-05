import React from "react";

function ProductList({ product, addToCart }) {
  return (
    <div className="col-md-3 m-3">
      <div className="card" style={{ width: "200px", height: "350px" }}>
        <div className="card-body text-align">
          <img
            src={product.image}
            className="card-img-top"
            alt="Image"
            style={{ width: "10rem", height: "10rem" }}
          />

          <h6 className="card-title mt-3">{product.title}</h6>
          <h6 className="card-title  badge bg-warning">{product.category}</h6>
          <h6 className="card-title badge bg-info">{product.price}</h6>
          <br />
          <a
            href="#"
            className="btn btn-primary"
            onClick={addToCart}
            id={product.id}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
