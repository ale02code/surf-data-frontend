import { createContext, useState } from "react";

export const SaleFormContext = createContext();

// Is to state if the sell form is open or not
export function SaleFormContextProvider({ children }) {
  const [saleFormOpen, setSaleFormOpen] = useState(false);

  return (
    <SaleFormContext.Provider value={{ saleFormOpen, setSaleFormOpen }}>
      {children}
    </SaleFormContext.Provider>
  );
}
