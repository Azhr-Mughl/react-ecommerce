import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import WebContext from '../../application/contexts/WebContext';
import asset_logo from "./../../assets/images/bloowatch-logo.png";

const Header = () => {
    const {cartItems} = useContext(WebContext);
	const totalItems = getTotalQuantities(cartItems);

    function getTotalQuantities(items) {
        const total = items.reduce((sum, item) => {
            return (sum += item.quantity);
        }, 0);
        return total;
    }
    
    return (
        <header>
            <div className="menu py-3 px-5">
                <div className="logo">
                    <Link to="/">
                        <img src={asset_logo} alt="Loading" />
                    </Link>
                </div>

                <div className="menu-items">
                    <Link to={'/home'} className="menu-item">Shop</Link>
                    <Link to={'/blog'} className="menu-item">Blog</Link>
                    <Link to={'/search'} className="menu-item">Search</Link>
                    <Link to={'/cart'} className="menu-item">Cart {`(${totalItems})`}</Link>
                </div>

            </div>

        </header>
    );
};

export default Header;