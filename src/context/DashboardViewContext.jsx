import { createContext, useState } from "react";

export const DashboardViewContext = createContext();

export function DashboardViewContextProvider({ children }) {
  const [view, setView] = useState("Ventas");

  return (
    <DashboardViewContext.Provider value={{ view, setView }}>
      {children}
    </DashboardViewContext.Provider>
  );
}
