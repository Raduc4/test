import React, { useState, useContext } from "react";
import { DataContext } from "../context/Context";

const ProductTableAction = ({
  productCategory,
  productName,
  productPrice,
  id,
}) => {
  const { setCart } = useContext(DataContext);
  const [productQty, setProductQty] = useState(1);

  const item = {
    productCategory,
    productName,
    productPrice,
    productQty,
    id,
  };
  const addToCart = () => {
    setCart((currentCart) => {
      const existItem = currentCart.find((item) => item.id === id);
      if (existItem) {
        existItem.productQty += productQty;

        existItem.productPrice = (
          Number(item.productPrice) * Number(existItem.productQty)
        ).toFixed(2);
      } else {
        currentCart.push(item);
      }
      return currentCart;
    });
  };

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

  return (
    <tr>
      <th>{productCategory}</th>
      <th>{productName}</th>
      <th>{productPrice}</th>
      <th>
        <button onClick={substractQty} type="button">
          (-)
        </button>
        <button onClick={addToCart}>Select</button>
        <button onClick={addQty} type="button">
          (+)
        </button>
      </th>
      <strong>{productQty}</strong>
    </tr>
  );
};

export default ProductTableAction;
