import React, { useContext } from "react";

import CartTable from "../components/CartTable";
import { DataContext } from "../context/Context";

const CartScreen = () => {
  const { cart } = useContext(DataContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => (
          <CartTable
            key={`key${index}${item.id}`}
            productCategory={item.productCategory}
            productName={item.productName}
            productPrice={item.productPrice}
            productQty={item.productQty}
            id={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartScreen;
