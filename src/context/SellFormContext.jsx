import { createContext, useState } from "react";

export const SellFormContext = createContext();

// Is to state if the sell form is open or not
export function SellFormContextProvider({ children }) {
  const [sellFormOpen, setSellFormOpen] = useState(false);

  return (
    <SellFormContext.Provider value={{ sellFormOpen, setSellFormOpen }}>
      {children}
    </SellFormContext.Provider>
  );
}
