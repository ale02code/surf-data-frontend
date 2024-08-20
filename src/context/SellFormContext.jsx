import { createContext, useContext, useState } from "react";

export const SellFormContext = createContext();

export function SellFormContextProvider({ children }) {
  const [sellFormOpen, setSellFormOpen] = useState(false);

  return (
    <SellFormContext.Provider value={{ sellFormOpen, setSellFormOpen }}>
      {children}
    </SellFormContext.Provider>
  );
}
