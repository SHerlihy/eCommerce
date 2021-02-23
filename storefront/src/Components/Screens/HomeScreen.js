import React from "react";
import products from "../../products";
import Product from "../Product";

const HomeScreen = () => {
  return (
    <main className="product-listings">
      {products.map((e) => {
        return <Product product={e} />;
      })}
    </main>
  );
};

export default HomeScreen;
