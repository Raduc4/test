import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/Context";

const ProductTableAction = ({
  productCategory,
  productName,
  productPrice,
  id,
}) => {
  const { products, cart, addToCart } = useContext(DataContext);
  const [productQty, setProductQty] = useState(1);

  const substractQty = () => {
    if (productQty === 1) {
      setProductQty(1);
    } else {
      setProductQty(productQty - 1);
    }
  };

  const addQty = () => {
    setProductQty(productQty + 1);
  };

  const submit = () => {
    addToCart(id, productCategory, productName, productPrice, productQty);
    console.log(cart);
  };

  return (
    <tr>
      <th>{productCategory}</th>
      <th>{productName}</th>
      <th>{productPrice}</th>
      <th>
        <button onClick={substractQty} type="button">
          (-)
        </button>
        <button onClick={submit}>Select</button>
        <button onClick={addQty} type="button">
          (+)
        </button>
      </th>
      <strong>{productQty}</strong>
    </tr>
  );
};

export default ProductTableAction;
