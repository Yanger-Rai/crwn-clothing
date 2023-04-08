import { createContext, useState } from "react";
import PRODUCTS from "../../shop-data.json";

export const productsContext = createContext({
  products: [],
  //setProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS);
  const value = { products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
