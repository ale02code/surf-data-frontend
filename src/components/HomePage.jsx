import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {
  const { empresa } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${empresa}/dashboard`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [empresa]);

  return (
    <div className="database-page">
      <h1>Base de Datos: {empresa}</h1> {/* Muestra el nombre de la empresa */}
      {/* Aquí iría la estructura común que se aplica a todas las bases de datos */}
    </div>
  );
}

export default HomePage;
