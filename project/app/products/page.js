"use client";

import React from "react";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
    const router = useRouter();
    return (
        <div className="mx-auto py-20">
            {/* Heading */}
            <div className="mb-12 bg-gray-200 flex flex-col gap-y-8 items-center justify-center p-25">
                <span className="font-semibold text-sm"><Link href={'/'} className="text-gray-500 cursor-pointer hover:text-red-500 transition-all">Home</Link> / Products</span>
                <h3 className="text-black font-bold text-6xl max-sm:text-4xl">Products</h3>
            </div>

            {/* Products Grid */}
            <div className=" grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mx-auto  gap-8 w-[95%] max-w-[1920px]">
                {products.map((item) => (
                    <div key={item.id} onClick={() => router.push(`/item/${item.id}`)}>

                        <ProductCard
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            item={item} // optional, can be used in ProductCard
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
