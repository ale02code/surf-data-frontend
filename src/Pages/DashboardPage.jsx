import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { SellFormContext } from "../context/SellFormContext";
import SellForm from "../components/SellForm";
import PrinterButton from "../components/PrinterButton";
import MenuDashboard from "../components/MenuDashboard";

function RegisterPage() {
  const API_URL = import.meta.env.VITE_API_URL;

  // Contexts
  const { sellFormOpen, setSellFormOpen } = useContext(SellFormContext);

  // Params
  const { empresa } = useParams();

  // States
  const [ventas, setVentas] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  // const [selectedVenta, setSelectedVenta] = useState(null);

  const handleSellFormToggle = () => {
    setSellFormOpen((prevState) => !prevState);
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await fetch(API_URL + "/sales", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch ventas data");

        const result = await response.json();
        setVentas(result);
      } catch (error) {
        setError(`Error: ${error}`);
      } finally {
        setLoadingData(false);
      }
    };

    fetchVentas();
  }, []);

  // const handlePrintClick = (venta) => {
  //   setSelectedVenta(venta);
  // };

  return (
    <section className="h-screen w-full overflow-x-hidden">
      {sellFormOpen && <SellForm />}

      <div className="h-full w-full overflow-x-hidden flex px-3">
        <MenuDashboard />

        <main className="w-[95%] mx-auto overflow-x-hidden">
          <div className="flex justify-between items-center pt-3 pb-2 mb-3 border-b border-gray-300">
            <h1 className="text-2xl font-bold capitalize">
              Dashboard {empresa}
            </h1>
            <button
              onClick={handleSellFormToggle}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 flex items-center gap-2 capitalize"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 6h18v12H3V6zm16 4H5v4h14v-4zm-2 0H7v2h10v-2zm-4 4h4v2h-4v-2zm-4 0h2v2H7v-2z" />
              </svg>
              New Sale
            </button>
          </div>

          {loadingData ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Ventas Totales: {ventas.length}
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      {[
                        "#",
                        "Producto",
                        "Precio Unitario",
                        "Cantidad",
                        "Opciones",
                      ].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody
                    className="bg-white divide-y divide-gray-200"
                    style={{ width: "100%", tableLayout: "fixed" }}
                  >
                    {ventas.map((venta, index) => (
                      <tr key={venta.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {venta.producto}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {venta.precio}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {venta.cantidad}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3 w-[220px]">
                          <button
                            onClick={() => console.log(`Edit ${venta.id}`)}
                            className="bg-sky-400 text-white font-semibold py-2 px-10 rounded-lg"
                          >
                            Edit
                          </button>
                          <PrinterButton venta={venta} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </main>
      </div>
    </section>
  );
}

export default RegisterPage;
