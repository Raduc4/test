import React, { useContext } from "react";
// Components
import ProductTableItem from "../components/ProductTableItem";
import { DataContext } from "../context/Context";

const MainScreen = () => {
  const { products } = useContext(DataContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => (
          <ProductTableItem
            key={`key${index}${item.category.id}`}
            productCategory={item.category.name}
            productName={item.name}
            productPrice={item.price}
            id={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MainScreen;
