import React from "react";
import { Hero, FeaturedProducts,Categories,Footer } from "../../components/componentExport";





const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer/>
    </div>
  );
};

export default Home;
