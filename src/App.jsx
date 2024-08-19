import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:empresa/dashboard" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
