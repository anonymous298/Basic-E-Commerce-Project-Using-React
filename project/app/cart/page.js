"use client";

import React, { useCallback } from "react";
import { useCard } from "@/context/CartContext";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const { cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } =
        useCard();

    const getSubtotal = useCallback(
        () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
        [cart]
    );

    const subTotalPrice = getSubtotal();

    return (
        <div className="w-[94%] max-w-[1920px] pt-30 mx-auto">
            {/* Heading */}
            <div className="mb-10 border-b-2 border-gray-100 py-5">
                <h2 className="text-black font-extrabold text-4xl font-mono">Cart</h2>
            </div> 

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Cart Items */}
                <div className="w-full lg:w-[70%] flex flex-col gap-4">
                    {cart.length === 0 && (
                        <div className="text-center py-20 text-gray-500">Your cart is empty.</div>
                    )}
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-center sm:items-center justify-between bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition gap-4"
                        >
                            {/* Image */}
                            <div className="relative w-28 h-28 flex-shrink-0 cursor-pointer" onClick={() => router.push(`/item/${item.id}`)}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 flex flex-col justify-between gap-2">
                                <span className="font-semibold text-gray-800 text-lg cursor-pointer hover:text-red-500 transition-all" onClick={() => router.push(`/item/${item.id}`)}>{item.name}</span>
                                <span className="text-gray-600">${item.price}</span>
                            </div>

                            {/* Controls: Quantity, Subtotal, Delete */}
                            <div className="flex items-center gap-10"> {/* Added gap-6 for spacing */}
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => decrementQuantity(item.id)}
                                        className="bg-gray-200 px-3 cursor-pointer py-1 rounded hover:bg-red-700 hover:text-white transition font-bold"
                                    >
                                        -
                                    </button>
                                    <span className="font-medium">{item.quantity}</span>
                                    <button
                                        onClick={() => incrementQuantity(item.id)}
                                        className="bg-gray-200 cursor-pointer px-3 py-1 rounded hover:bg-red-700 hover:text-white transition font-bold"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Subtotal */}
                                <div className="font-semibold text-gray-800 text-lg">
                                    ${item.price * item.quantity}
                                </div>
 
                                {/* Delete */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 cursor-pointer hover:text-red-700 transition ml-2"
                                >
                                    <FaTrash size={20} />
                                </button>
                            </div>
                        </div>

                    ))}
                </div>

                {/* Right Checkout Summary */}
                <div className="w-full lg:w-[25%] bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6 h-full">
                    <h3 className="text-2xl font-bold text-gray-800">Order Summary</h3>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">${subTotalPrice}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold">$10</span>
                    </div>

                    <div className="flex justify-between border-t border-gray-200 pt-4 font-bold text-gray-800">
                        <span>Total</span>
                        <span>${subTotalPrice + 10}</span>
                    </div>

                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition">
                        Proceed to Checkout
                    </button>

                    <button
                        onClick={clearCart}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 rounded-lg transition"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
