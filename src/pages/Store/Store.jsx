import React from "react";
import "../../components/Featured-Products/FeaturedProducts.css";
import "./Store.css";
import { useProduct } from "../../context/product-context";
import { ProductCard, Filters } from "../../components/componentExport";
const Store = () => {
  const { products } = useProduct();
  console.log(products, "products");
  return (
    <div className="store">
      <Filters />
      <div className="product-list">
        <h1 className="mt-2 center fs-dxl">Product List</h1>
        <div className="product-container">
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
