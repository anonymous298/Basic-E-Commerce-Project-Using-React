"use client";
import { useCard } from "@/context/CartContext";
import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ name, price, image, onSale = false, item }) => {
    const {addToCart} = useCard();

    return (
        <div className="relative group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
            {/* Sale Marker */}
            {onSale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                    SALE
                </span>
            )}

            {/* Product Image */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-gray-600 font-medium">${price}</p>

                {/* Rating */}
                <div className="flex items-center text-yellow-400 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <span className="ml-2 text-gray-500">(4.5)</span>
                </div>

                {/* Add to Cart Button */}
                <button onClick={() => addToCart(item)} className="mt-3 bg-black text-white py-2 rounded-lg hover:bg-[#e33a3f] transition-all">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
