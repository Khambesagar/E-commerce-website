import React from 'react';
import { useCart } from './CartContext.jsx';  // Import the useCart hook

function Cart_Data() {
    const { state, dispatch } = useCart();  // Get the cart state and dispatch function

    // Handle Increment of quantity
    const increment = (id) => {
        dispatch({ type: 'INCREMENT', payload: { id } });
    };

    // Handle Decrement of quantity
    const decrement = (id) => {
        dispatch({ type: 'DECREMENT', payload: { id } });
    };

    // Handle removing product from the cart
    const removeProduct = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };


    // Calculate the total price
    const getTotalPrice = () => {
        return (state.cartItems && state.cartItems.length > 0)
            ? state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
            : 0;  // Return 0 if cartItems is empty or undefined
    };


    return (
        <div className='bg-white p-6 mt-2'>
                <h1 className="text-xl font-semibold text-center pb-2">Your Cart <span className='bg-blue-500 rounded-full p-1'>🛒</span></h1>

            <div className="max-w-screen-2xl container mx-auto md:px-20 bg-gray-300 rounded-3xl shadow-2xl">
                <div className=' md:mx-40 md:my-4 pt-2'>

                    {/* If no products in cart */}
                    {state.cartItems.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">Your cart is empty!</p>
                    ) : (
                        <div className="space-y-4 mt-4">
                            {state.cartItems.map((item) => (

                                <div key={item.id} className="grid md:grid-flow-col md:grid-cols-[1fr_1fr_1fr] justify-between items-center border-b py-2">

                                    {/* Product Details */}
                                    <div className="flex flex-row flex-grow md:pl-4 p-2 gap-6 items-center ">
                                              {/* Product Image */}
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-gray-500">Price: ${item.price}</p>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex justify-end items-center ">
                                        <button
                                            onClick={() => decrement(item.id)}
                                            className="btn btn-sm btn-outline btn-primary px-2  py-1 mr-2"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg">{item.quantity}</span>
                                        <button
                                            onClick={() => increment(item.id)}
                                            className="btn btn-sm btn-outline btn-primary px-2 py-1 ml-2"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Product Price */}
                                    <div className="flex flex-col justify-between items-end pl-4 ">
                                        <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>

                                        {/* Remove button */}
                                        <button
                                            onClick={() => removeProduct(item.id)}
                                            className="text-red-500 hover:text-red-700 mt-2"
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}

                    {/* Cart Summary */}
                    {state.cartItems.length > 0 && (
                        <div className="mt-6 flex gap-6 items-center justify-center font-semibold">
                            <p className="text-xl">Total:</p>
                            <p className="text-xl text-orange-500">${getTotalPrice()}</p>
                        </div>
                    )}

                    {/* Checkout Button */}
                    {state.cartItems.length > 0 && (
                        <div className="my-5 text-center">
                            <button className="btn btn-success px-10 py-2  text-white text-xl">Buy Now</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart_Data;
