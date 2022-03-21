import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { Store } from "../../pages/pagesExport";
const Hero = () => {
  return (
    <main className="Hero">
      <div className="hero-content">
        <h1>Sports Kart</h1>
        <h2 className="mt-1 fs-xl">Great Deals On all products</h2>
        
          <Link to="/store" element={<Store />}>
          <button className="btn">
          Shop now
          </button>
          </Link>
        
      </div>
      <div className="hero-img">
        <img
          src="/images/soccer.svg"
          className="responsive-image"
          alt="loading..."
        />
      </div>
    </main>
  );
};

export default Hero;
