import { useContext } from "react";
import { SellFormContext } from "../context/SellFormContext";
import { SelectedDBContext } from "../context/SelectedDBContext";
import { FormDataContext } from "../context/FormDataContext";

function SellForm() {
  // Contextos
  const { formData, setFormData } = useContext(FormDataContext);
  const { setSellFormOpen } = useContext(SellFormContext);
  const { db } = useContext(SelectedDBContext);

  const handleSellForm = async (e) => {
    e.preventDefault();
    setSellFormOpen(false);

    try {
      const response = await fetch(
        `https://sales-manager-api.onrender.com/${db}/dashboard/ventas`, // Usa el valor de db en la URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Error desconocido");
      }

      const result = await response.json();
      alert("Venta creada con éxito");
      // Opcional: Limpia el formulario después de la venta exitosa
      setFormData({
        nombre: "",
        producto: "",
        precio: "",
        cantidad: "",
      });
    } catch (error) {
      console.error("Error:", error.message);
      alert(`Error al crear la venta: ${error.message}`);
    }
  };

  return (
    <section className="w-screen h-screen fixed z-0 top-0 flex justify-center items-center">
      <div
        className="h-screen w-screen bg-white-back"
        onClick={() => setSellFormOpen(false)}
      ></div>
      <div className="w-[95%] max-w-[450px] text-white sm:w-90 absolute z-20">
        <form
          onSubmit={handleSellForm}
          className="bg-[#212529] p-4 rounded-lg flex justify-center flex-col sm:p-10"
        >
          <h6 className="text-3xl uppercase font-bold mb-3 text-center">
            Registro De Ventas
          </h6>
          <div className="flex flex-col justify-center gap-1">
            <div>
              <label htmlFor="nombre" className="text-lg">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                pattern="^[^\d\s][^\d]*\s[^\d]+$"
                title="El nombre no debe contener números, debe contener apellido, y no debe tener espacios al inicio."
                placeholder="Christopher Chacón"
                required
                id="nombre"
                className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg text-lg"
                value={formData.nombre || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="producto" className="text-lg">
                Producto
              </label>
              <input
                type="text"
                name="producto"
                placeholder="Producto..."
                required
                id="producto"
                className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg text-lg"
                value={formData.producto || ""}
                onChange={(e) =>
                  setFormData({ ...formData, producto: e.target.value })
                }
              />
            </div>
            <div className="flex w-full gap-[3%]">
              <div className="w-full flex flex-col">
                <label htmlFor="precio" className="text-lg">
                  Precio
                </label>
                <input
                  type="text"
                  name="precio"
                  placeholder="$ 0.00"
                  id="precio"
                  className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg text-lg"
                  value={formData.precio || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, precio: e.target.value })
                  }
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="cantidad" className="text-lg">
                  Cantidad
                </label>
                <input
                  type="number"
                  name="cantidad"
                  placeholder="4"
                  max={5}
                  min={1}
                  title="Cantidad debe estar entre 1 a 5"
                  required
                  id="cantidad"
                  className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg mb-6 text-lg"
                  value={formData.cantidad || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, cantidad: e.target.value })
                  }
                />
              </div>
            </div>
            <button className="bg-indigo-500 p-4 rounded-lg uppercase w-full text-xl">
              Generar Venta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SellForm;
