import React, { useState, useEffect } from "react";

const WebContext = React.createContext({
    cartItems: [],
    handleCartItems: () => { },
});

export const WebContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);

    const contextValue = {
        cartItems: cartItems,
        handleCartItems: setCartItems
    }

    return <WebContext.Provider value={contextValue}>{props.children}</WebContext.Provider>
};

export default WebContext;