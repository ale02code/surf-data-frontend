export async function apiService() {
  const API_URL = import.meta.env.VITE_API_URL;
  const TOKEN = localStorage.getItem("token");

  if (!TOKEN) {
    return { error: "No hay un token de autenticación" };
  }

  try {
    const response = await fetch(`${API_URL}/saless`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok)
      throw new Error("Error al obtener datos de ventas");

    const salesJSON = await response.json();
    return { data: salesJSON };
  } catch (e) {
    console.error(e);
    return { error: e.message };
  }
}
