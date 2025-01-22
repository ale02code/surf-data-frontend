// components imports
import MenuDashboard from "../components/MenuDashboard";

// hooks imports
import useDashboardView from "../hooks/useDashboardView";

function RegisterPage() {
  // hooks
  const currentDashboardView = useDashboardView();

  return (
    <section className="h-screen w-full overflow-x-hidden">
      <div className="h-full w-full overflow-x-hidden flex px-3">
        <MenuDashboard />

        {currentDashboardView}
      </div>
    </section>
  );
}

export default RegisterPage;
