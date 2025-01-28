import { useContext, useEffect, useState } from "react";

// context imports
import { SalesControlContext } from "../context/SalesControlContext";
import { SearchProductContext } from "../context/SearchProductContext";
import { apiService } from "../services/apiService";

function useFilterSales() {
  // Contexts
  const { sales, setSales } = useContext(SalesControlContext);
  const { searchProduct } = useContext(SearchProductContext);

  // States
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSales = async () => {
      setLoadingData(true);

      const { data, error } = await apiService();

      if (error) {
        setLoadingData(false);
        return setError(error);
      } else {
        setLoadingData(false);
        return setSales(data);
      }
    };

    getSales();
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
