import React, { useContext } from "react";
import { DataContext } from "../context/Context";

const CartTable = ({
  productCategory,
  productName,
  productPrice,
  id,
  productQty,
}) => {
  const { setCart } = useContext(DataContext);

  const removeFromCart = () => {
    setCart((currentCart) => {
      const itemIndex = currentCart.findIndex((element) => element.id !== id);
      if (itemIndex) {
        return currentCart.splice(itemIndex, 0);
      } else {
        return currentCart;
      }
    });
  };

  const substractQty = () => {
    setCart((currentCart) => {
      const productToChange = currentCart.findIndex((elem) => elem.id === id);
      const newItem = {
        productCategory,
        productName,
        productPrice,
        id,
        productQty:
          currentCart[productToChange].productQty === 1
            ? 1
            : (currentCart[productToChange].productQty -= productQty),
      };
      currentCart.splice(productToChange, 0, newItem);
    });
  };

  // const addQty = () => {
  //   // setProductQty(productQty + 1);
  // };

  return (
    <tr>
      <th>{productCategory}</th>
      <th>{productName}</th>
      <th>{productPrice}</th>
      <th>{productQty}</th>
      <th>
        <button onClick={substractQty} type="button">
          (-)
        </button>
        <button onClick={removeFromCart}>Remove</button>
        <button type="button">(+)</button>
      </th>
    </tr>
  );
};

export default CartTable;
