import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { SellFormContextProvider } from "./context/SellFormContext";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <SellFormContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/:empresa/dashboard" element={<HomePage />} />
          </Routes>
        </Router>
      </SellFormContextProvider>
    </div>
  );
}

export default App;
