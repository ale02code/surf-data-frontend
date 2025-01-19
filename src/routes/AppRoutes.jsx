import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import DashboardPage from "../Pages/DashboardPage";
import NotFoundPage from "../Pages/NotFoundPage";

// Sections from Menu
import SalesDashboard from "../components/SalesDashboard";
import ReportsDashboard from "../components/ReportsDashboard";
import QueriesDashboard from "../components/QueriesDashboard";
import SettingsDashboard from "../components/SettingsDashboard";

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          {/* Páginas principales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/:empresa/dashboard" element={<DashboardPage />} />

          {/* Rutas de las secciones del menú */}
          <Route
            path="/:empresa/dashboard/sales"
            element={<SalesDashboard />}
          />
          <Route
            path="/:empresa/dashboard/reports"
            element={<ReportsDashboard />}
          />
          <Route
            path="/:empresa/dashboard/queries"
            element={<QueriesDashboard />}
          />
          <Route
            path="/:empresa/dashboard/settings"
            element={<SettingsDashboard />}
          />

          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
