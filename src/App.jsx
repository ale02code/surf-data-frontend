import { SellFormContextProvider } from "./context/SellFormContext";
import { FormDataContextProvider } from "./context/FormDataContext";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <SellFormContextProvider>
        <FormDataContextProvider>
          <AppRoutes />
        </FormDataContextProvider>
      </SellFormContextProvider>
    </div>
  );
}

export default App;
