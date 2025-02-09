import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for the cart
const initialState = {
    cartItems: [],  // Ensure this is always an empty array initially
};

// Reducer function to handle actions for the cart
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
            };
        case 'INCREMENT':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case 'DECREMENT':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        default:
            return state;
    }
};

// Create Cart Context
const CartContext = createContext();

// Custom hook to access Cart Context
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component to wrap your App and provide global cart state
export const CartProvider = ({ children }) => {
    // Load the cart state from localStorage (if exists)
    const savedCart = JSON.parse(localStorage.getItem('cart')) || initialState;

    // Ensure cartItems is always an array
    const [state, dispatch] = useReducer(cartReducer, {
        ...savedCart,
        cartItems: Array.isArray(savedCart.cartItems) ? savedCart.cartItems : []
    });

    // Update localStorage whenever the cart state changes
    useEffect(() => {
        if (state.cartItems.length > 0) {
            localStorage.setItem('cart', JSON.stringify(state)); // Save to localStorage
        } else {
            localStorage.removeItem('cart'); // Remove from localStorage if cart is empty
        }
    }, [state]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
