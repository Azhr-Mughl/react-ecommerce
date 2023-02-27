import React, { useContext } from 'react';

import WebContext from '../../application/contexts/WebContext';

import Banner from '../../infrastructure/Common/Banner';
import Footer from '../../infrastructure/Common/Footer';
import Header from '../../infrastructure/Common/Header';
import ItemCard from '../../infrastructure/Common/ItemCard';

import { products } from '../../infrastructure/data';

const ProductListing = () => {
    const { cartItems, handleCartItems } = useContext(WebContext)

    const addToCart = (id) => {
        const allItemsArray = [...products];
        const targetItem = allItemsArray.filter((item) => item.id === id)[0];
        const existingItem = cartItems.filter((item) => item.info.id === id);

        if (existingItem.length === 0) {
            const newItem = { info: targetItem, quantity: 1 };
            handleCartItems((prevState) => [...prevState, newItem]);
        } else {
            let updatedItems = cartItems.map((item) => {
                if (item.info.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            handleCartItems(updatedItems);
        }
    };


    return (
        <>
            <Header />
            <Banner text={'Surfing'} />
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="listing">
                            <div className="row">
                                {products.map((item) => {
                                    return (
                                        <div className="col-md-4 my-4" key={item.id}>
                                            <ItemCard
                                                item={item}
                                                addToCart={addToCart}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ProductListing;