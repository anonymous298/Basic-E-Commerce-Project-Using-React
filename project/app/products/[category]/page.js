"use client";

import React from "react";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const CategoryProductsPage = () => {
  const { category } = useParams();
  const router = useRouter();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updatedCategoryProducts = products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="mx-auto py-20">
      {/* Heading / Breadcrumb */}
      <div className="mb-12 bg-gray-200 flex flex-col gap-y-4 items-center justify-center py-18 rounded-xl">
        <span className="text-gray-500 text-sm">
          <Link
            href="/"
            className="hover:text-red-500 transition-colors font-medium"
          >
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/products"
            className="hover:text-red-500 transition-colors font-medium"
          >
            Products
          </Link>{" "}
          / <span className="font-semibold text-black">{capitalizeFirstLetter(category)}</span>
        </span>
        <h3 className="text-black font-bold text-5xl sm:text-6xl">
          {capitalizeFirstLetter(category)}
        </h3>
      </div>

      {/* Products Grid */}
      {updatedCategoryProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[95%] mx-auto max-w-[1920px]">
          {updatedCategoryProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/item/${item.id}`)}
              className="transition-all cursor-pointer"
            >
              <ProductCard
                name={item.name}
                price={item.price}
                image={item.image}
                item={item}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProductsPage;
