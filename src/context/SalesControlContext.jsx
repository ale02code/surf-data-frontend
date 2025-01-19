import { createContext, useState } from "react";

export const SalesControlContext = createContext();

export function SalesControlContextProvider({ children }) {
  const [sales, setSales] = useState([]);

  return (
    <SalesControlContext.Provider value={{ sales, setSales }}>
      {children}
    </SalesControlContext.Provider>
  );
}
