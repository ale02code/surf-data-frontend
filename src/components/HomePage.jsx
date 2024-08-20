import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { SellFormContext } from "../context/SellFormContext";
import SellForm from "./SellForm";
import PrinterIcon from "../assets/icons/printer.png";

function HomePage() {
  // contexts
  const { sellFormOpen, setSellFormOpen } = useContext(SellFormContext);

  // params
  const { empresa } = useParams();

  // state
  const [data, setData] = useState(null);
  const [ventas, setVentas] = useState(null);
  const normalizedEmpresa = empresa.toLowerCase().replace(/ /g, "_");

  const handleForm = () => {
    setSellFormOpen((prevState) => !prevState);
  };

  const handleEdit = () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sales-manager-api.onrender.com/${normalizedEmpresa}/dashboard`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [normalizedEmpresa]);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await fetch(
          `https://sales-manager-api.onrender.com/${normalizedEmpresa}/ventas`
        );
        const result = await response.json();
        setVentas(result);
      } catch (error) {
        console.error("Error fetching ventas:", error);
      }
    };

    fetchVentas();
  }, [normalizedEmpresa]);

  return (
    <section className="w-full overflow-x-hidden">
      {sellFormOpen && <SellForm />}

      <div className="mx-auto overflow-x-hidden">
        <header className="relative z-20 flex justify-center items-center pt-3 pb-2 mb-3 border-b border-gray-300 bg-[#212529] text-white">
          <nav className="flex justify-center items-center space-x-5">
            <p className="text-xl font-semibold uppercase cursor-pointer">
              Insertar
            </p>
            <p className="text-xl font-semibold uppercase cursor-pointer">
              Status
            </p>
          </nav>
        </header>
        <main className="w-[95%] mx-auto overflow-x-hidden">
          <div className="flex justify-between items-center pt-3 pb-2 mb-3 border-b border-gray-300">
            <h1 className="text-2xl font-bold">Dashboard {empresa}</h1>
            <button
              onClick={handleForm}
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

          <h2 className="text-xl font-semibold mb-4">
            Ventas Totales: {ventas ? ventas.ventas_data.length : 0}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Producto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Precio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cantidad
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Opciones
                  </th>
                </tr>
              </thead>
              <tbody
                className="bg-white divide-y  divide-gray-200"
                style={{ width: "100%", tableLayout: "fixed" }}
              >
                {ventas &&
                  ventas.ventas_data.map((venta, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {venta.id}
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
                      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">  
                        <button
                          className="bg-sky-400 text-white font-semibold py-2 px-10 rounded-lg"
                          onClick={handleEdit}
                        >
                          Edit
                        </button>
                        <img
                          className="h-12"
                          src={PrinterIcon}
                          alt="img printer"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HomePage;
