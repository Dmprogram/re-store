import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ numItems, total }) {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Book store</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
}

const mapStateToProps = ({
  cart: { cartItems, orderTotal, quantityTotal },
}) => ({
  items: cartItems,
  total: orderTotal,
  numItems: quantityTotal,
});

export default connect(mapStateToProps)(Header);
