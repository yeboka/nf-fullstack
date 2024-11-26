import { useState } from "react";
import "./App.css";

function Children({ setCount, count }) {
  return <button onClick={() => {
    setCount((prev) => prev -)
  }}>Minus One from CHILDREN</button>;
}

export default Children;
