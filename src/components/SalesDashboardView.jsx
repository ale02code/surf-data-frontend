import { useState, useEffect, useContext } from "react";

// context imports
import { SalesControlContext } from "../context/SalesControlContext";
import { SaleFormContext } from "../context/SaleFormContext";

// components imports
import InfoCard from "../components/InfoCard";
import SaleForm from "../components/SaleForm";
import PrinterButton from "../components/PrinterButton";
import LoadingModule from "../components/LoadingModule";
import ErrorModule from "./ErrorModule";

// params imports
import { useParams } from "react-router-dom";

// icons imports
import plusIcon from "../assets/icons/dashboard-icons/plus.svg";
import cloudIcon from "../assets/icons/dashboard-icons/cloud.svg";
import shoppingCartIcon from "../assets/icons/dashboard-icons/shopping-cart.svg";
import returnIcon from "../assets/icons/dashboard-icons/return.svg";
import productsIcon from "../assets/icons/dashboard-icons/products.svg";
import moneyIcon from "../assets/icons/dashboard-icons/money.svg";
import lensIcon from "../assets/icons/dashboard-icons/lens.svg";
import filterIcon from "../assets/icons/dashboard-icons/filter.svg";
import pencilIcon from "../assets/icons/dashboard-icons/pencil.svg";

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

function SalesDashboardView() {
  // Contexts
  const { sales, setSales } = useContext(SalesControlContext);
  const { saleFormOpen, setSaleFormOpen } = useContext(SaleFormContext);

  // Params
  const { empresa } = useParams();

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

  const handleSaleFormToggle = () => {
    setSaleFormOpen((prevState) => !prevState);
  };

  const handleCountReturnSales = (sales) => {
    const count = sales.filter((sale) => !sale.estado).length;
    return count;
  };

  const handleCountProducts = (sales) => {
    const count = sales.reduce((acc, sales) => acc + sales.cantidad, 0);
    return count;
  };

  const handleCountProfit = (sales) => {
    const totalProfit = sales.reduce((acc, sale) => {
      const cleanedPrice = sale.precio.replace(/[^\d.-]/g, "");
      const price = parseFloat(cleanedPrice);
      const qua = parseInt(sale.cantidad, 10);

      return acc + price * qua;
    }, 0);

    return `$${totalProfit}`;
  };

  return (
    <main className="overflow-y-hidden px-5 mt-3">
      {saleFormOpen && <SaleForm />}
      <div className="flex justify-between items-center pt-3 pb-2 mb-3 border-b border-gray-300">
        <hgroup>
          <h1 className="text-2xl font-bold capitalize">
            Dashboard - {empresa}
          </h1>
          <h3 className="text-neutral-700">
            Administra facilmente las ventas de tu negocio.
          </h3>
        </hgroup>
        <div className="flex gap-2 items-center">
          <button className="text-carbon-blue flex items-center gap-2 border border-carbon-blue px-4 py-2 rounded">
            <img className="h-6" src={cloudIcon} alt="download icon" />
            Descargar ventas
          </button>
          <button
            onClick={handleSaleFormToggle}
            className="text-carbon-blue bg-green-500 px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 flex items-center gap-2 font-semibold"
          >
            <img className="h-5" src={plusIcon} alt="plus Icon" />
            Añadir venta
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-8 my-8 h-auto">
        <InfoCard
          src={shoppingCartIcon}
          qua={sales.length}
          label="Ventas en total"
        />
        <InfoCard
          src={returnIcon}
          qua={handleCountReturnSales(sales)}
          label="Devoluciones en total"
        />
        <InfoCard
          src={productsIcon}
          qua={handleCountProducts(sales)}
          label="Productos en total"
        />
        <InfoCard
          src={moneyIcon}
          qua={handleCountProfit(sales)}
          label="Ganancias en total"
        />
      </div>

      <header className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Todas las ventas</h2>
        <div className="flex items-center gap-2">
          <form className="flex gap-2 border border-gray-300 py-1 px-2 rounded cursor-pointer">
            <label htmlFor="search-sale" className="cursor-pointer">
              <img
                className="h-6"
                src={lensIcon}
                alt="lens icon"
                draggable="false"
              />
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
        <table className="min-w-full divide-gray-200 border border-gray-300 mb-5">
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
    </main>
  );
}

export default SalesDashboardView;
