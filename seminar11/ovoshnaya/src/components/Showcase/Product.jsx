import React from "react";

export default function Product({item, addToCart, remove}) {

  const {name, price, amountLeft, img} = item 

  return (
    <div
      style={{
        border: "1px solid",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>AmountLeft: {amountLeft}</p>
      <img src={img} alt="" style={{ width: "200px" }} />
      <button onClick={() => addToCart(item)}>Add to cart</button>
      <button onClick={() => remove(item)}>Remove From Cart</button>
    </div>
  );
}
