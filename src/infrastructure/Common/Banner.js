import React from 'react';

const Banner = ({text}) => {
    return (
        <div className="banner py-5 mb-5">
            <h4 className="container">
                {text}
            </h4>
        </div>
    );
};

export default Banner;