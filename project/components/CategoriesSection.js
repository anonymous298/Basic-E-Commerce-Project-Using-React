"use client";
import React from "react";
import products from "@/data/products";
import CategorieCard from "./CategorieCard"; // make sure this exists
// import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { useRouter } from "next/navigation";

const CategoriesSection = () => {
  const router = useRouter();

  // ✅ Extract unique categories
  const getUniqueCategories = () => {
    const categories = [];

    for (const item of products) {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    }

    return categories;
  };

  // ✅ Attach images to categories
  const getCategoriesObject = () => {
    const images = [
      "https://images.pexels.com/photos/33924730/pexels-photo-33924730.jpeg", // men
      "https://images.pexels.com/photos/33926934/pexels-photo-33926934.jpeg", // women
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg",   // kids
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // shoes
      "https://images.unsplash.com/3/www.madebyvadim.com.jpg?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0", // accessories
    ];

    const uniqueCategories = getUniqueCategories();

    return uniqueCategories.map((cat, idx) => ({
      category: cat,
      image: images[idx % images.length], // fallback rotation if more cats
    }));
  };

  const finalCategories = getCategoriesObject();

  return (
    <section id="categorieSection" className="py-16 flex justify-center">
      <div className="w-[90%] max-w-[1920px]">
        <h2 className="text-4xl font-bold text-white mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalCategories.map((cat, idx) => (
            <div key={idx} onClick={() => router.push(`/products/${cat.category}`)}>
                <CategorieCard category={cat.category} image={cat.image} />
            </div>
          ))}  
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
