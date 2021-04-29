import React from "react";

const CartTable = ({
  productCategory,
  productName,
  productPrice,
  id,
  productQty,
}) => {
  return (
    <tr>
      <th>{productCategory}</th>
      <th>{productName}</th>
      <th>{productPrice}</th>
      <th>{productQty}</th>
      <th>
        <button type="button">(-)</button>
        <button>Remove</button>
        <button type="button">(+)</button>
      </th>
    </tr>
  );
};

export default CartTable;
