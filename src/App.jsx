import { SaleFormContextProvider } from "./context/SaleFormContext";
import { FormDataContextProvider } from "./context/FormDataContext";
import { SalesControlContextProvider } from "./context/SalesControlContext";
import { DashboardViewContextProvider } from "./context/DashboardViewContext";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <SaleFormContextProvider>
        <FormDataContextProvider>
          <SalesControlContextProvider>
            <DashboardViewContextProvider>
              <AppRoutes />
            </DashboardViewContextProvider>
          </SalesControlContextProvider>
        </FormDataContextProvider>
      </SaleFormContextProvider>
    </div>
  );
}

export default App;
