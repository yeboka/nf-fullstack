import React from "react";

export default function Product(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.amountLeft}</p>
      <img src={props.img} alt="vegetable" style={{width: "200px"}}/>
    </div>
  );
}
