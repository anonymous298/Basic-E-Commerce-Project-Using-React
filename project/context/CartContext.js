"use client";

import { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const useCard = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Basic CRUD operation
    // Function to add items in cart
    const addToCart = (item) => setCart((prev) => [...prev, item]);

    // Function to remove item from the cart
    const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

    // Function to clear the whole cart
    const clearCart = () => setCart([]);

    // Function to Increase quantity of item in cart
    

    // Function to Decrease quantity of item in cart

    return (
        <CardContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CardContext.Provider>
    );
};
