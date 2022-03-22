import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useDataFromServer } from "../hooks/useDataFromServer";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { products, categories } = useDataFromServer();
  const removeDuplicatess = (value, index, arr) => {
    return arr.indexOf(value) === index;
  };
  const brands = products
    .map((product) => product.brandName)
    .filter(removeDuplicatess);

  console.log(brands);

  return (
    <ProductContext.Provider value={{ products, categories, brands }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
