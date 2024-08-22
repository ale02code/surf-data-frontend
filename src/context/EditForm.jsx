import { createContext, useState } from "react";

export const EditFormContext = createContext();

export function EditFormContextProvider({ children }) {
  const [editFormOpen, setEditFormOpen] = useState(false);

  return (
    <EditFormContext.Provider value={{ sellFormOpen, setSellFormOpen }}>
      {children}
    </EditFormContext.Provider>
  );
}
