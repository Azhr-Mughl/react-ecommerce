import React from 'react';
import { Link } from "react-router-dom";

import insta1 from './../../assets/images/insta-1.png';
import insta2 from './../../assets/images/insta-2.png';
import insta3 from './../../assets/images/insta-3.png';
import insta4 from './../../assets/images/insta-4.png';
import insta5 from './../../assets/images/insta-5.png';

const Footer = () => {
    const instaImgs = [
        { src: insta1, alt: 'insta-1'},
        { src: insta2, alt: 'insta-2'},
        { src: insta3, alt: 'insta-3'},
        { src: insta4, alt: 'insta-4'},
        { src: insta5, alt: 'insta-5'},
    ]
    return (
        <footer>
            <div className="menu py-5 px-5 mt-5">
                <div className="row w-100">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="title">About</div>
                                <div className="content my-4">
                                    Bloowatch is specialized software for watersports schools (surfing, kitesurfing, sailing and diving) and outdoor activity providers (skiing, climbing)
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="title">Contact</div>
                                <div className="content my-4">
                                    <div className="footer-item">156-677-124-442-2887</div>
                                    <div className="footer-item">wave@bloowatch.com</div>
                                    <div className="footer-item">Spain</div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="title">Useful Links</div>
                                <div className="content my-4">
                                    <Link to={'/about-us'} className="footer-item">About us</Link>
                                    <Link to={'/history'} className="footer-item">History</Link>
                                    <Link to={'/contact-us'} className="footer-item">Contact us</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="title">Instagram</div>
                            <div className="content my-4">
                                <div className="insta-imgs">
                                    {instaImgs.map((item, index) => {
                                        return (
                                            <img src={item.src} alt={item.alt} key={index}/>
                                        );
                                    })}
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;