import { SellFormContextProvider } from "./context/SellFormContext";
import { SelectedDBContextProvider } from "./context/SelectedDBContext";
import { FormDataContextProvider } from "./context/FormDataContext";
import AppRoutes from "./routes/AppRoutes";

import "./index.css"

function App() {
  return (
    <div className="min-h-screen w-screen">
      <SellFormContextProvider>
        <SelectedDBContextProvider>
          <FormDataContextProvider>
            <AppRoutes />
          </FormDataContextProvider>
        </SelectedDBContextProvider>
      </SellFormContextProvider>
    </div>
  );
}

export default App;
