import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { SellFormContext } from "../context/SellFormContext";
import SellForm from "../components/SellForm";
import PrinterButton from "../components/PrinterButton";
import MenuDashboard from "../components/MenuDashboard";

// Icons
import plusIcon from "../assets/icons/dashboard-icons/plus.svg";
import cloudIcon from "../assets/icons/dashboard-icons/cloud.svg";

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

        <main className="w-full overflow-hidden px-5 mt-6">
          <div className="flex justify-between items-center pt-3 pb-2 mb-3 border-b border-gray-300">
            <hgroup>
              <h1 className="text-2xl font-bold capitalize">
                Dashboard - {empresa}
              </h1>
              <h3 className="text-neutral-700">
                Administra facilmente las ventas de tu negocio.
              </h3>
            </hgroup>
            <div className=" flex gap-2 items-center">
              <button className="text-carbon-blue flex items-center gap-2 border border-carbon-blue px-4 py-2 rounded">
                <img className="h-6" src={cloudIcon} alt="download icon" />
                Descargar ventas
              </button>
              <button
                onClick={handleSellFormToggle}
                className="text-carbon-blue bg-green-500 px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 flex items-center gap-2 font-semibold"
              >
                <img className="h-5" src={plusIcon} alt="plus Icon" />
                Añadir venta
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-8 my-8">
            {/*TODO: convert to component */}

            {/* <div className="px-7 py-5 border border-gray-300 w-56 h-36">
              <img src="" alt="Ventas totales icon" />
              <strong className="text-3xl">{ventas.length}</strong>
              <p className="text-base">Ventas en total</p>
            </div>
            <div className="px-7 py-5 border border-gray-300 w-56 h-36">
              <img src="" alt="Devoluciones totales icon" />
              <strong className="text-3xl">2</strong>
              <p className="text-base">Devoluciones en total</p>
            </div>
            <div className="px-7 py-5 border border-gray-300 w-56 h-36">
              <img src="" alt="Productos totales icon" />
              <strong className="text-3xl">30</strong>
              <p className="text-base">Productos en total</p>
            </div>
            <div className="px-7 py-5 border border-gray-300 w-56 h-36">
              <img src="" alt="Ganancias totales icon" />
              <strong className="text-3xl">21</strong>
              <p className="text-base">Ganancias en total</p>
            </div> */}
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
