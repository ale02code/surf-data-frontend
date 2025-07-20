// Context imports
import { useContext } from "react";
import { DashboardViewContext } from "../context/DashboardViewContext";

// Components imports
import SalesDashboardView from "../components/SalesDashboardView";
import ReportsDashboardView from "../components/ReportsDashboardView";  
import SettingsDashboardView from "../components/SettingsDashboard";

function useDashboardView() {
  // Contexts
  const { dashboardView } = useContext(DashboardViewContext);

  const optionsDashboardView = {
    Ventas: <SalesDashboardView />,
    Reportes: <ReportsDashboardView />,
    Configuracion: <SettingsDashboardView />,
  };

  const currentDashboardView = optionsDashboardView[dashboardView] || (
    <p>Vista no encontrada</p>
  );

  return currentDashboardView;
}

export default useDashboardView;
