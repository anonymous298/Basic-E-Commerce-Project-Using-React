import CategoriesSection from "@/components/CategoriesSection";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Component */}
      <Hero />

      {/* New Arrival Component */}
      <NewArrivals />

      {/* Categories section */}
      <CategoriesSection />

      {/* Popular Products section */}
      <PopularProducts />

    </div>
  );
}
