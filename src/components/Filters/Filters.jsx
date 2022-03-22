import React from "react";
import { useProduct } from "../../context/product-context";
import "./Filters.css";
import { useState } from "react";

const Filters = () => {
  const { products, categories, brands } = useProduct();
  const [filterByRange, setF] = useState(0);
  // console.log(categories, brands, "cc");

  return (
    <div className="product-filters">
      <div className="flex justify-sb align-center p-1">
        <h4>Filters</h4>
        <button
          className="pointer btn btn-filters"
          onClick={() => console.log("hello")}
        >
          Clear Filters
        </button>
      </div>

      <div className="filters-group pt-1">
        <section className=" flex justify-sb align-center ">
          <h4>Price</h4>
          <h4>{filterByRange}</h4>
        </section>
        <input
          type="range"
          name="price-filter"
          min={2000}
          max={500000}
          step={1000}
          value={filterByRange}
          className="mt-1"
          onChange={(e) => setF(e.target.value)}
        />
      </div>
      <div className="filters-group pt-1">
        <section className="pt-1">
          <h4>Category</h4>
        </section>
        {categories.map(({ _id, categoryName }) => (
          <div key={_id}>
            <input
              type="checkbox"
              id={categoryName}
              value={categoryName}
              // checked={filterByCategory.includes(category)}
              onChange={(e) => {}}
              className={"mt-1"}
            />
            <label htmlFor={categoryName} className="fs-m text-right uppercase">
              {categoryName}
            </label>
          </div>
        ))}
      </div>

      <div className="filters-group pt-1">
        <section className="pt-1">
          <h4>Brands</h4>
        </section>
        {brands.map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              id={brand}
              value={brand}
              // checked={filterByCategory.includes(category)}
              onChange={(e) => {}}
              className="mt-1"
            />
            <label htmlFor={brand} className="fs-m text-right uppercase">
              {brand}
            </label>
          </div>
        ))}
      </div>
      <div className="filters-group pt-1">
        <section className="pt-1">
          <h4>Ratings</h4>
        </section>
        {["4", "3", "2", "1"].map((rating) => (
          <div key={rating} className="mt-1">
            <input
              type="radio"
              id={rating}
              name="rating-filter"
              value={Number(rating)}
              // checked={Number(filterByRating) === Number(4 - id)}
              onChange={(e) => console.log(0)}
            />
            <label
              htmlFor={rating}
              className="fs-m text-right uppercase"
            >{`${Number(rating)} stars & above`}</label>
          </div>
        ))}
      </div>
      <div className="filters-group pt-1">
        <section className="pt-1">
          <h4>Sort By</h4>
        </section>
        {["Low-to-High", "High-to-Low"].map((sortBy) => (
          <div key={sortBy} className="mt-1">
            <input
              type="radio"
              id={sortBy}
              name="rating-filter"
              value={sortBy}
              // checked={Number(filterByRating) === Number(4 - id)}
              onChange={(e) => console.log(0)}
            />
            <label htmlFor={sortBy} className="fs-m text-right uppercase">
              {sortBy}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
