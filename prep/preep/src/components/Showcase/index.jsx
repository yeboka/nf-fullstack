import { products } from "../../data/products";
import Product from "./Product";

export default function Showcase() {
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          amountLeft={product.amountLeft}
          img={product.img}
        />
      ))}
    </div>
  );
}
