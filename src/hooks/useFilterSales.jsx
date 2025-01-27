import { useContext } from "react";

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
