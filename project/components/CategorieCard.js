"use client";
import Image from "next/image";
import React from "react";

const CategorieCard = ({ category, image }) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-sm">
      {/* Image */}
      <div className="relative h-[500px] w-full">
        <Image
          src={image}
          alt={category}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[3px]"
        />
      </div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full">
        <div
          className="bg-black px-6 py-6 text-white font-bold text-2xl 
          transform transition-all duration-500 origin-left 
          group-hover:bg-red-600 group-hover:scale-x-110"
        >
          {category}
        </div>
      </div>
    </div>
  );
};

export default CategorieCard;
