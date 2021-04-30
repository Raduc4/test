import React, { useContext } from "react";
// Components
import ProductTableItem from "../components/ProductTableItem";
import { DataContext } from "../context/Context";

const MainScreen = () => {
  const { products, setProducts } = useContext(DataContext);
  console.log(products);

  const sortPriceAsc = () => {
    setProducts((currentProducts) =>
      currentProducts.sort((a, b) => a.price - b.price)
    );
    console.log(products);
  };
  const sortPriceDesc = () => {
    setProducts((currentProducts) =>
      currentProducts.sort((a, b) => b.price - a.price)
    );
    console.log(products);
  };
  const sortPriceAZ = () => {
    setProducts((currentProducts) =>
      currentProducts.sort(
        (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
      )
    );
    console.log(products);
  };
  const sortPriceZA = () => {
    setProducts((currentProducts) =>
      currentProducts.sort(
        (a, b) => b.name.toLowerCase() > a.name.toLowerCase()
      )
    );
    console.log(products);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Sort by:</h3>
        <button onClick={sortPriceAsc}>Price Asc</button>
        <button onClick={sortPriceDesc}>Price Desc</button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Sort by:</h3>
        <button onClick={sortPriceAZ}>Category A-Z</button>
        <button onClick={sortPriceZA}>Category Z-A</button>
      </div>

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
    </>
  );
};

export default MainScreen;
