import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { DataContext } from "./context/Context";

import Header from "./components/Header";
import MainScreen from "./screens/MainScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [notRemovedCartItems, setNotRemovedCartItems] = useState([]);

  const removeFromCart = (array, id) => {
    const filtered = array.filter((value) => {
      return value.id !== id;
    });
    setNotRemovedCartItems(filtered);
  };

  useEffect(() => {
    async function productsApiCall() {
      const api_call = await fetch("http://localhost:3001/api/products");
      const data = await api_call.json();
      setProducts(data);
    }
    productsApiCall();
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        setCart,
        cart,
        notRemovedCartItems,
        setProducts,
        removeFromCart,
      }}
    >
      <Router>
        <Header />
        <Route path="/" component={MainScreen} exact />
        <Route path="/cart" component={CartScreen} />
      </Router>
    </DataContext.Provider>
  );
}

export default App;
