import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Carousel } from 'react-responsive-carousel';
import { products } from '../../infrastructure/data';

import Banner from '../../infrastructure/Common/Banner';
import Footer from '../../infrastructure/Common/Footer';
import Header from '../../infrastructure/Common/Header';
import ItemCard from '../../infrastructure/Common/ItemCard';

import { ReactComponent as Up } from './../../assets/icons/angle-up.svg';
import { ReactComponent as Down } from './../../assets/icons/angle-down.svg';
import { ReactComponent as Line } from './../../assets/icons/line-horizontal.svg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import WebContext from '../../application/contexts/WebContext';

const ProductDetail = () => {
    let { itemId } = useParams();
    const { cartItems, handleCartItems } = useContext(WebContext);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [activeTab, setActiveTab] = useState('description');


    const productTabs = [
        { name: 'description' },
        { name: 'additional information' },
        { name: 'reviews' },
    ];

    const sliderImages = [
        { url: require("./../../assets/images/prod-1_prev_ui.png") },
        { url: require("./../../assets/images/prod-2_prev_ui.png") },
        { url: require("./../../assets/images/prod-3_prev_ui.png") },
        { url: require("./../../assets/images/prod-4_prev_ui.png") },
        { url: require("./../../assets/images/prod-5_prev_ui.png") },
        { url: require("./../../assets/images/prod-6_prev_ui.png") },
    ];

    useEffect(() => {
        if (itemId) {
            const allItemsArray = [...products];
            const targetItem = allItemsArray.filter((item) => item.id == itemId)[0];

            const existingItem = cartItems.filter((item) => item?.info?.id == itemId);

            if (existingItem.length) {
                setProduct(existingItem[0]);
                setQuantity(existingItem[0].quantity);
            } else {
                setProduct({ info: targetItem, quantity: 1 });
                setQuantity(1);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addToCart = (id) => {
        const allItemsArray = [...products];
        const targetItem = allItemsArray.filter((item) => item.id == id)[0];
        const existingItem = cartItems.filter((item) => item.info.id == id);

        if (existingItem.length == 0) {
            const newItem = { info: targetItem, quantity };
            handleCartItems((prevState) => [...prevState, newItem]);
        } else {
            let updatedItems = cartItems.map((item) => {
                if (item.info.id == id) {
                    return { ...item, quantity };
                }
                return item;
            });
            handleCartItems(updatedItems);
        }
    };

    return (
        <>
            <Header />
            <Banner text={'Detail'} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="slider">
                            <Carousel autoPlay showStatus={false} showIndicators={false} swipeable={true} labels={false}>
                                {sliderImages.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img alt="" src={item.url} />
                                            {/* <p className="legend">Legend 1</p> */}
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>

                    <div className="item col-md-6">
                        <div className="title">{product?.info?.title}</div>
                        <div className="d-flex mt-3">
                            <div className="price-tag px-3 py-1 fit-content ">${product?.info?.price}</div>
                            {product?.info?.old_price &&
                                <div className="px-3 py-1 fit-content text-decoration-line-through">${product?.info?.old_price}</div>
                            }
                        </div>

                        <div className="content my-4">
                            Causae iudicat vitu perata mea ei, cum posse im pedit molestie ne, atqui viris simi lique ei vel. Per te illud an imal, vix ea sint con sul a pella tur iris itegre.
                        </div>

                        <div className="cart-handling">
                            <div className="d-flex align-items-center fw-bold">
                                {` ${quantity} `}
                                <div className="ms-3 d-flex flex-column justify-content-center align-items-center fit-content">
                                    <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)} >
                                        <Up />
                                    </button>
                                    <Line />
                                    <button className="quantity-btn" onClick={() => setQuantity(quantity - 1)} >
                                        <Down />
                                    </button>
                                </div>
                                <button className="bw-btn default ms-3" onClick={() => addToCart(itemId)} >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        <div className="specifications">
                            <div className="my-3">
                                <span className="fw-bold">SKU:</span> {product?.info?.id}
                            </div>
                            <div className="my-3">
                                <span className="fw-bold">CATEGORIES:</span> {product?.info?.category}
                            </div>
                            <div className="my-3">
                                <span className="fw-bold">TAGS:</span> board, surf, surging
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mt-5">
                    <div className="col-md-11 mx-auto">
                        <div className="bw-tabs mb-4">
                            <div className=" d-flex">
                                {productTabs.map((tab, index) => (
                                    <div className={'tab-item ' + (tab.name === activeTab ? 'active' : '')} key={'tab-' + (index + 1)} onClick={() => setActiveTab(tab.name)}>
                                        {tab.name}
                                    </div>
                                ))}
                            </div>

                            <div className="tabs-content">
                                {activeTab === 'description' &&
                                    <div className="">
                                        {product?.info?.description}
                                    </div>
                                }
                                {activeTab === 'additional information' &&
                                    <div className="">

                                        <div className="row">
                                            <div className="col-md-5">
                                                Additional Information
                                            </div>
                                        </div>

                                    </div>
                                }
                                {activeTab === 'reviews' &&
                                    <div className="">

                                        <div className="row">
                                            <div className="col-md-5">
                                                Reviews
                                            </div>
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-9 mx-auto">
                        <div className="listing row">
                            {products.slice(0, 3).map((item) => {
                                return (
                                    <div className="col-md-4 my-4" key={item.id}>
                                        <ItemCard
                                            item={item}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;