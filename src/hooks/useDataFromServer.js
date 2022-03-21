import { useEffect, useState } from "react";
import axios from "axios";
export const useDataFromServer = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // get categories Data
        const categoriesData = await axios.get("/api/categories");
        setCategories(categoriesData.data.categories);
        // get products data
        const productsData = await axios.get("/api/products");
        setProducts(productsData.data.products);
      } catch (e) {
        // console.log("catch", e.status);
        // will add error handle later
      }
    })();
  }, []);
  return { categories, products };
};
