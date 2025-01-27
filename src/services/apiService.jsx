import { useState, useContext} from "react";
import { SalesControlContext } from "../context/SalesControlContext";

export async function apiService() {
  const [setLoadingData] = useState(true);
  const [setError] = useState(false);

  const { setSales } = useContext(SalesControlContext);

  const API_URL = import.meta.env.VITE_API_URL;
  const TOKEN = localStorage.getItem("token");

  try {
    const response = await fetch(`${API_URL}/sales`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok || !response)
      throw new Error("Error al obtener datos de ventas");

    const result = await response.json();
    setSales(result);
  } catch (e) {
    console.error(e);
    setError("Hubo un problema al cargar las ventas. Intenta nuevamente.");
  } finally {
    setLoadingData(false);
  }
}
