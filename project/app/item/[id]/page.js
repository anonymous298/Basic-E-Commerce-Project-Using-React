"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import products from "@/data/products";
import Image from "next/image";
import { useCard } from "@/context/CartContext";

const ProductPage = () => {
  const params = useParams();
  const { id } = params;
  const { addToCart } = useCard();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const currentProduct = products.find((item) => item.id.toString() === id);
    if (currentProduct) {
      setProduct({ ...currentProduct, quantity: 1 }); // Initialize quantity in product object
    }
  }, [id]);

  if (!product) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center text-gray-500">
        Product not found.
      </div>
    );
  }

  const handleIncrement = () =>
    setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  const handleDecrement = () =>
    setProduct((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
    }));

  return (
    <div className="w-[94%] max-w-[1920px] mx-auto py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg h-96 lg:h-[500px] rounded-xl shadow-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.onSale && (
              <span className="bg-red-500 text-white px-4 py-1 rounded-lg text-sm font-semibold">
                SALE
              </span>
            )}
          </div>

          {/* Quantity Controls */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden self-start">
              <button
                onClick={handleDecrement}
                className="bg-gray-200 px-4 py-2 cursor-pointer hover:bg-red-700 hover:text-white transition font-bold"
              >
                -
              </button>
              <span className="px-4 font-semibold">{product.quantity}</span>
              <button
                onClick={handleIncrement}
                className="bg-gray-200 px-4 py-2 cursor-pointer hover:bg-red-700 hover:text-white transition font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="bg-red-500 hover:bg-red-600 w-full cursor-pointer text-white font-bold py-3 px-8 rounded-lg text-lg transition shadow-md hover:shadow-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-gray-600 space-y-2 text-sm lg:text-base">
            <p>
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span>{" "}
              {product.stock || "Unlimited"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
