import React from "react";
import { Link } from "react-router-dom";
import StarBar from "../StarBar";
import products from "../../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <img src={product.image} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductScreen;
