import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {useDataFromServer} from '../hooks/useDataFromServer'
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const {products,categories}=useDataFromServer()

  return (
    <ProductContext.Provider value={{products,categories}}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
