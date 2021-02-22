import React from "react";
import StarBar from "./StarBar";

const Product = (props) => {
  return (
    <div className="product-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <StarBar rating={props.rating} numReviews={props.numReviews} />
      <button>See More</button>
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
