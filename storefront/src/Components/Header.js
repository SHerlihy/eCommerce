import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand">
        eSTORE
      </Link>
      <div className="nav__btns">
        <Link to="signup">SIGN UP</Link>
        <Link to="cart">CART</Link>
      </div>
    </header>
  );
};

export default Header;
