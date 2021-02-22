import React from "react";
import Product from "./Product";
import products from "../products";

const ProductListing = () => {
  return (
    <div>
      <main className="product-listings">
        {products.map((e) => {
          return (
            <Product
              name={e.name}
              img={e.image}
              price={e.price}
              rating={e.rating}
              numReviews={e.numReviews}
            />
          );
        })}
      </main>
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

export default ProductListing;
