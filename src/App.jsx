import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { SellFormContextProvider } from "./context/SellFormContext";
import { SelectedDBContextProvider } from "./context/SelectedDBContext";
import { FormDataContextProvider } from "./context/FormDataContext";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <SellFormContextProvider>
        <SelectedDBContextProvider>
          <FormDataContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/:empresa/dashboard" element={<HomePage />} />
              </Routes>
            </Router>
          </FormDataContextProvider>
        </SelectedDBContextProvider>
      </SellFormContextProvider>
    </div>
  );
}

export default App;
