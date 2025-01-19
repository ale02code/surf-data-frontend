import { useState, useEffect, useContext } from "react";
import { SalesControlContext } from "../context/SalesControlContext";
import PrinterButton from "../components/PrinterButton";
import LoadingModule from "../components/LoadingModule";
import ErrorModule from "./ErrorModule";

// icons imports
import lensIcon from "../assets/icons/dashboard-icons/lens.svg";
import filterIcon from "../assets/icons/dashboard-icons/filter.svg";
import pencilIcon from "../assets/icons/dashboard-icons/pencil.svg";

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

function TableSales() {
  // Contexts
  const { sales, setSales } = useContext(SalesControlContext);

  // States
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);

  // Fetch sales data
  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await fetch(`${API_URL}/sales`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Error al obtener datos de ventas");

        const result = await response.json();
        setSales(result);
      } catch (e) {
        console.error(e);
        setError("Hubo un problema al cargar las ventas. Intenta nuevamente.");
      } finally {
        setLoadingData(false);
      }
    };

    fetchVentas();
  }, [setSales]);

  // Handle sales status
  const handleStatus = (status) => {
    return status ? "Exitosa" : "Devolución";
  };

  const headers = [
    "#",
    "Producto",
    "Precio Unitario",
    "Cantidad",
    "Estado",
    "Opciones",
  ];

  if (loadingData) {
    return <LoadingModule />;
  }

  if (error) {
    return <ErrorModule msg={error} />;
  }

  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Todas las ventas</h2>
        <div className="flex items-center gap-2">
          <form className="flex gap-2 border border-gray-300 py-1 px-2 rounded cursor-pointer">
            <label htmlFor="search-sale">
              <img className="h-6" src={lensIcon} alt="lens icon" />
            </label>
            <input
              className="outline-none"
              type="text"
              name="search-sale"
              id="search-sale"
              placeholder="Buscar venta..."
            />
          </form>
          <div className="flex items-center gap-2 border border-gray-300 py-1 px-2 rounded cursor-pointer">
            <img className="h-6" src={filterIcon} alt="filter icon" />
            <p>Filtros</p>
          </div>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-gray-200 border border-gray-300 overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-gray-200">
            {sales.map((sale, index) => (
              <tr
                className="border border-gray-300 overflow-hidden text-center"
                key={sale.id}
              >
                <td className="px-5 py-2 text-center">{index + 1}</td>
                <td className="px-5 py-2 text-center">{sale.producto}</td>
                <td className="px-5 py-2 whitespace-nowrap">{sale.precio}</td>
                <td className="px-5 py-2 whitespace-nowrap">{sale.cantidad}</td>
                <td className="px-5 py-2">
                  <div
                    className={`h-full rounded-lg ${
                      sale.estado ? "bg-green-300" : "bg-purple-300"
                    }`}
                  >
                    <p className="text-carbon-blue font-semibold">
                      {handleStatus(sale.estado)}
                    </p>
                  </div>
                </td>
                <td className="px-5 py-2">
                  <button className="border border-gray-300 mr-2">
                    <img className="h-8" src={pencilIcon} alt="pencil icon" />
                  </button>
                  <PrinterButton venta={sale} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableSales;
