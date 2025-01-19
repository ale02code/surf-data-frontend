import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import DashboardPage from "../Pages/DashboardPage";
import NotFoundPage from "../Pages/NotFoundPage";

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          {/* Páginas principales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/:empresa/dashboard" element={<DashboardPage />} />

          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
