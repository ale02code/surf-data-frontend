import { useState, createContext } from "react";

export const WidthMobileContext = createContext();

export function WidthMobileContextProvider({ children }) {
  const [width, setWidth] = useState(false);

  return (
    <WidthMobileContext.Provider value={{ width, setWidth }}>
      {children}
    </WidthMobileContext.Provider>
  );
}
