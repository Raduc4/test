import React, { useContext } from "react";
import { DataContext } from "../context/Context";

const CartScreen = () => {
  const { cart } = useContext(DataContext);
  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <h1></h1>
      ))}
    </div>
  );
};

export default CartScreen;
