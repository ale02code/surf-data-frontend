import { createContext, useState } from "react";

export const SearchProductContext = createContext();

export function SearchProductContextProvider({ children }) {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <SearchProductContext.Provider value={{ searchProduct, setSearchProduct }}>
      {children}
    </SearchProductContext.Provider>
  );
}
