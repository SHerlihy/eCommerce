import React from "react";
import StarBar from "./StarBar";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`} className="product-image">
        <img src={product.image} />
      </Link>
      <Link to={`/product/${product._id}`} className="product-row">
        <h3>{product.name}</h3>
        <h3>{product.price}</h3>
      </Link>
      <div className="product-row">
        <StarBar rating={product.rating} numReviews={product.numReviews} />
        <button>BUY NOW</button>
      </div>
    </div>
  );
};

// _id: '1',
// name: 'Airpods Wireless Bluetooth Headphones',
// image: '/images/airpods.jpg',
// description:
//   'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
// brand: 'Apple',
// category: 'Electronics',
// price: 89.99,
// countInStock: 10,
// rating: 4.5,
// numReviews: 12,

export default Product;
