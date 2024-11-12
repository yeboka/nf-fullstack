import React from "react";
import { products } from "../../data/products";
import Product4 from "./Product";
import { addToCart, remove } from "../../helper";

export default function Showcase() {
  return (
    <div className="showcase">
      {products.map((product) => (
        <Product4
          key={product.id}
          item={product}
          addToCart={addToCart}
          remove={remove}
        />
      ))}
    </div>
  );
}
