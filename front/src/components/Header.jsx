import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <ul
      style={{
        marginBottom: "2%",
      }}
    >
      {pathname === "/" ? (
        <Link to={"/cart"}>Cart</Link>
      ) : pathname === "/cart" ? (
        <Link to={"/"}>Home</Link>
      ) : (
        <>
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>Cart</Link>
        </>
      )}
    </ul>
  );
};

export default Header;
