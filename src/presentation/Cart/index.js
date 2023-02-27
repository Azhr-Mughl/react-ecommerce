import React, { useContext } from 'react';
import WebContext from '../../application/contexts/WebContext';

import Banner from '../../infrastructure/Common/Banner';
import Footer from '../../infrastructure/Common/Footer';
import Header from '../../infrastructure/Common/Header';

import { ReactComponent as Up } from './../../assets/icons/angle-up.svg';
import { ReactComponent as Down } from './../../assets/icons/angle-down.svg';
import { ReactComponent as Line } from './../../assets/icons/line-horizontal.svg';

import assetDismiss from './../../assets/images/dismiss.png';
// import { ReactComponent as AssetDismiss } from "./../../assets/images/dismiss.png";

const Cart = () => {
    const { cartItems, handleCartItems } = useContext(WebContext);

    function getTotal(items) {
        const total = items.reduce((sum, item) => {
            return (sum += item.quantity * item.info.price);
        }, 0);
        return total.toFixed(2);
    }

    const removeFromCart = (id) => {
        let updatedItems = cartItems.filter((item) => item.info.id !== id);
        handleCartItems(updatedItems);
    };

    const incrementQuantity = (id) => {
        let updatedItems = cartItems.map((item) => {
            if (item.info.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        handleCartItems(updatedItems);
    }

    const decrementQuantity = (id) => {
        const updatedItems = cartItems.map((item) => {
            if (item.info.id === id) {
                if (item.quantity === 0) {
                    return item;
                } else {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        const filteredItems = updatedItems.filter((item) => item.quantity > 0);
        handleCartItems(filteredItems);
    };


    const CartItems = ({ item }) => {
        const itemId = item.info.id;
        const total = (item.info.price * item.quantity).toFixed(2);
        return (<tr>
            <td className="fit-content">
                <img src={assetDismiss} alt="remove item" onClick={() => removeFromCart(itemId)} className="remove-item" />

                <img src={item.info.image} alt="product" className="product-image" />
            </td>
            <td>
                <div className="text-uppercase fw-bold">
                    {item.info.title}
                </div>
            </td>
            <td>
                <div>
                    ${item.info.price}
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center fw-bold">
                    {` ${item.quantity} `}
                    <div className="ms-3 d-flex flex-column justify-content-center align-items-center fit-content">
                        <button className="quantity-btn" onClick={() => incrementQuantity(itemId)} >
                            <Up />
                        </button>
                        <Line />
                        <button className="quantity-btn" onClick={() => decrementQuantity(itemId)} >
                            <Down />
                        </button>
                    </div>
                </div>
            </td>
            <td>${total}</td>
        </tr>)
    }


    return (
        <>
            <Header />
            <Banner text={'Cart'} />
            <div className="container">
                <div className="row">
                    <div className="col-md-11 mx-auto">
                        {!cartItems.length ?
                            <h5 className="text-center">Your cart is empty.</h5>
                            :
                            <>
                                <table className="bw-table table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => {
                                            return (
                                                <CartItems
                                                    item={item}
                                                    key={item.info.id}
                                                />
                                            );
                                        })}
                                        {/* {cartItems.map(function} */}



                                    </tbody>
                                </table>
                                <div className="action-btns ms-5 my-5">
                                    <button className="bw-btn primary px-4 py-2 fit-content me-3">Apply Coupon</button>
                                    <button className="bw-btn primary px-4 py-2 fit-content ">Update Cart</button>
                                </div>

                                <div className="calculations col-md-5 pt-3">
                                    <h4 className="text-uppercase title">Cart Total</h4>
                                    <div className="item b-bottom">
                                        <div className="type text-uppercase">Subtotal</div>
                                        <div className="value">${getTotal(cartItems)}</div>
                                    </div>

                                    <div className="item b-bottom">
                                        <div className="type text-uppercase">Shipping</div>
                                        <div className="value">
                                            Enter your address to view shipping options.
                                            <div className="d-block text-dark">Calculate shipping</div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="type text-uppercase">Total</div>
                                        <div className="value">${getTotal(cartItems)}</div>
                                    </div>

                                    <button className="bw-btn primary px-4 py-2 fit-content mt-4">Proceed Checkout</button>

                                </div>
                            </>

                        }

                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;