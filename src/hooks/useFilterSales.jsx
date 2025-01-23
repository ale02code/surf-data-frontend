import { useState, useEffect, useContext } from "react";

// context imports
import { SalesControlContext } from "../context/SalesControlContext";
import { SearchProductContext } from "../context/SearchProductContext";

// params imports
// import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

function useFilterSales() {
  // Contexts
  const { sales, setSales } = useContext(SalesControlContext);
  const { searchProduct } = useContext(SearchProductContext);

  // Params
  // const { empresa } = useParams();

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

  const filteredSales =
    searchProduct.trim() === ""
      ? sales
      : sales.filter(
          (sale) =>
            sale.producto &&
            sale.producto
              .toLowerCase()
              .includes(searchProduct.trim().toLowerCase())
        );

  return { filteredSales, loadingData, error };
}

export default useFilterSales;
