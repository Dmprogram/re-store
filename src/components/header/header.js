import React from "react";
import './header.css';

const Header = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <a className="logo text-dark" href="#">ReStore</a>
            <a className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </a>
        </header>
    );
};

export default Header;