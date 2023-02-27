import React from 'react';

import { Link } from "react-router-dom";

const ItemCard = ({ item, addToCart }) => {
    return (
        <div className="item card h-100">
            <div className="card-upper position-relative">
                <div className="card-image text-center position-relative">
                    <img src={item.image} alt="product" className="w-100" />
                    {item.sale &&
                        <div className="sale-tag">Sale</div>
                    }
                </div>
                <button
                    className="bw-btn primary w-100 add-to-cart-btn position-absolute bottom-0"
                    onClick={() => addToCart(item.id, item.category)}
                >
                    Add to Cart
                </button>
            </div>
            <div className="card-lower text-center mt-3">
                <Link to={'/product/' + item.id} className="title">{item.title}</Link>
                <div className="category">{item.category}</div>
                <div className="d-flex mt-3 justify-content-center">
                    <div className="price-tag px-3 py-1 fit-content ">${item.price}</div>
                    {item.old_price &&
                        <div className="px-3 py-1 fit-content text-decoration-line-through">${item.old_price}</div>
                    }
                </div>

            </div>
        </div>
    );
};

export default ItemCard;