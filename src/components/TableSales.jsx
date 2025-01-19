import { useState, useEffect, useContext } from "react";
import PrinterButton from "../components/PrinterButton";
import { SalesControlContext } from "../context/SalesControlContext";

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

function TableSales() {
  // contexts
  const { sales, setSales } = useContext(SalesControlContext);

  // States
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

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
        setSales(result);
      } catch (error) {
        setError(`Error: ${error}`);
      } finally {
        setLoadingData(false);
      }
    };

    fetchVentas();
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        Ventas Totales: {sales.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              {["#", "Producto", "Precio Unitario", "Cantidad", "Opciones"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody
            className="bg-white divide-y divide-gray-200"
            style={{ width: "100%", tableLayout: "fixed" }}
          >
            {sales.map((venta, index) => (
              <tr key={venta.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {venta.producto}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{venta.precio}</td>
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
  );
}

export default TableSales;
