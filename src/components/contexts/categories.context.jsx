import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoryMap: {},
  //setProduct: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categorMap = await getCategoriesAndDocuments();
      setCategoryMap(categorMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
