import { createContext, useState } from "react";

// Crear el contexto para SelectedDB
export const SelectedDBContext = createContext();

// Proveedor de contexto para SelectedDB
export const SelectedDBContextProvider = ({ children }) => {
  const [db, setDb] = useState(false);

  return (
    <SelectedDBContext.Provider value={{ db, setDb }}>
      {children}
    </SelectedDBContext.Provider>
  );
};
