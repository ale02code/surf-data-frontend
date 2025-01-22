import { SaleFormContextProvider } from "./context/SaleFormContext";
import { FormDataContextProvider } from "./context/FormDataContext";
import { SalesControlContextProvider } from "./context/SalesControlContext";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <SaleFormContextProvider>
        <FormDataContextProvider>
          <SalesControlContextProvider>
            <AppRoutes />
          </SalesControlContextProvider>
        </FormDataContextProvider>
      </SaleFormContextProvider>
    </div>
  );
}

export default App;
