import React from "react";
import Hero from "../Hero/Hero";
import FeaturedProducts from "../Featured-Products/FeaturedProducts";
export default function Home() {
  return (
    <div className="flex justify-center align-center f-dxl">
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
