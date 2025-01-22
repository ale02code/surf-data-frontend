// Icons
import reportIcon from "../assets/icons/dashboard-icons/report.png";
import salesIcon from "../assets/icons/dashboard-icons/sales.png";
import queriesIcon from "../assets/icons/dashboard-icons/query.png";
import settingsIcon from "../assets/icons/dashboard-icons/settings.png";
import logoutIcon from "../assets/icons/dashboard-icons/logout.png";

function MenuDashboard() {
  const sections = [
    { label: "Ventas", img: salesIcon },
    { label: "Reportes", img: reportIcon },
    { label: "Consultas", img: queriesIcon },
    { label: "Configuración", img: settingsIcon },
  ];

  const handleSectionView = (nameSection) => {
    return console.log(nameSection);
  };

  return (
    <header className="h-full min-w-56 relative text-white p-2 overflow-hidden border-r border-gray-300 bg-gray-100">
      <nav className="h-full flex flex-col justify-between">
        <section>
          <div className="text-lg font-semibold">
            <div className="mt-2 mb-5">
              <h1 className="text-2xl font-bold text-carbon-blue text-center uppercase">
                Surf Data
              </h1>
            </div>
            {sections.map((section) => (
              <div
                key={section.label}
                className="p-2 flex items-center gap-2 mb-1 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSectionView(section.label)}
              >
                <img src={section.img} alt={section.img + " icon"} />
                <p className="text-carbon-blue">{section.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <a href="https://surfdata.online">
            <div className="flex items-center gap-2 hover:bg-red-100 p-2 cursor-pointer">
              <img src={logoutIcon} alt="Log Out Icon" />
              <p className="text-red-500 text-lg font-semibold">
                Cerrar sesión
              </p>
            </div>
          </a>
        </section>
      </nav>
    </header>
  );
}

export default MenuDashboard;
