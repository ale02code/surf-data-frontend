// components imports
import MenuDashboard from "../components/MenuDashboard";

// context imports
import { SearchProductContextProvider } from "../context/SearchProductContext";

// hooks imports
import useDashboardView from "../hooks/useDashboardView";

function RegisterPage() {
  // hooks
  const currentDashboardView = useDashboardView();

  return (
    <section className="h-screen w-full overflow-x-hidden flex">
      <div className="ml-60 flex-1">
        <MenuDashboard />

        <div className="w-full min-h-screen">
          <SearchProductContextProvider>
            {currentDashboardView}
          </SearchProductContextProvider>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
