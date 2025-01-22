import { createContext, useState } from "react";

export const DashboardViewContext = createContext();

export function DashboardViewContextProvider({ children }) {
  const [dashboardView, setDashboardView] = useState("Ventas");

  return (
    <DashboardViewContext.Provider value={{ dashboardView, setDashboardView }}>
      {children}
    </DashboardViewContext.Provider>
  );
}
