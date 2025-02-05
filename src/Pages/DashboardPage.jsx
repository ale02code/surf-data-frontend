// components imports
import MenuDashboard from "../components/MenuDashboard";

// context imports
import { SearchProductContextProvider } from "../context/SearchProductContext";
import { WidthMobileContextProvider } from "../context/WidthMobileContext";

// hooks imports
import useDashboardView from "../hooks/useDashboardView";

function RegisterPage() {
  // hooks
  const currentDashboardView = useDashboardView();

  return (
    <section className="h-screen w-full flex overflow-x-hidden">
      <div className="ml-60 flex-1 max-md:ml-0">
        <WidthMobileContextProvider>
          <MenuDashboard />

          <div className="w-full min-h-screen">
            <SearchProductContextProvider>
              {currentDashboardView}
            </SearchProductContextProvider>
          </div>
        </WidthMobileContextProvider>
      </div>
    </section>
  );
}

export default RegisterPage;
