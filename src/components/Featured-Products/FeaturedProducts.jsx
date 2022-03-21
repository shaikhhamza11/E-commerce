import React from "react";
import "./FeaturedProducts.css";
import { useProduct } from "../../context/product-context";
import { ProductCard } from "../../components/componentExport";
const FeaturedProducts = () => {
  const { products } = useProduct();
  return (
    <div className="featured-product center">
      <h1 className="mt-1 fs-dxl">Featured product</h1>
      <h3 className="fs-l">Our Hero products</h3>
      <div className="product-container">
        {products &&
          products
            .filter((prod) => prod.isFeatured)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
