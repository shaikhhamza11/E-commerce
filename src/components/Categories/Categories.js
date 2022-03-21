import React from "react";
import "./Categories.css";
import { useProduct } from "../../context/product-context";
const Categories = () => {
  const { categories } = useProduct();
  return (
    <div>
      <h3 className="center mt-2">Categories</h3>
      <div className="categories lap-three lap-one tab-one mob-one">
        {categories &&
          categories.map((category) => (
            <div
              className="card card-overlay cards-shadow mt-2 "
              key={category.id}
            >
              <img
                src={category.imgUrl}
                alt="loading"
                className="responsive-image"
              />
              <div className="text-overlay">
                <h1 className="fs-dxl">{category.categoryName}</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
