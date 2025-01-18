import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SellFormContext } from "../context/SellFormContext";
import { FormDataContext } from "../context/FormDataContext";

function SellForm() {
  const { empresa } = useParams();
  const { formData, setFormData } = useContext(FormDataContext);
  const { setSellFormOpen } = useContext(SellFormContext);

  const normalizedEmpresa = empresa.toLowerCase().replace(/ /g, "");

  useEffect(() => {
    console.log(empresa);
  }, []);

  const handleSellForm = async (e) => {
    e.preventDefault();
    setSellFormOpen(false);

    try {
      const response = await fetch(
        `https://sales-manager-api.onrender.com/${normalizedEmpresa}/dashboard/ventas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      await response.json();
      alert("Venta creada con éxito");

      setFormData({
        producto: "",
        precio: "",
        cantidad: "",
      });
    } catch (error) {
      console.error("Error:", error.message);
      alert(`Error al crear la venta: ${error.message}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="w-screen h-screen fixed z-50 top-0 left-0 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setSellFormOpen(false)}
      ></div>
      <div className="relative z-20 w-[95%] max-w-md bg-[#212529] p-6 rounded-lg">
        <form
          onSubmit={handleSellForm}
          className="flex flex-col gap-4 text-white"
        >
          <h6 className="text-3xl uppercase font-bold text-center">
            Registro de Ventas
          </h6>
          <div className="flex flex-col gap-2">
            <label htmlFor="producto" className="text-lg">
              Producto
            </label>
            <input
              type="text"
              name="producto"
              id="producto"
              placeholder="Producto..."
              required
              className="w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-900"
              value={formData.producto || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col w-full">
              <label htmlFor="precio" className="text-lg">
                Precio
              </label>
              <input
                type="text"
                name="precio"
                id="precio"
                placeholder="$ 0.00"
                className="w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-900"
                value={formData.precio || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="cantidad" className="text-lg">
                Cantidad
              </label>
              <input
                type="number"
                name="cantidad"
                id="cantidad"
                placeholder="4"
                min="1"
                max="5"
                required
                title="Cantidad debe estar entre 1 y 5"
                className="w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-900"
                value={formData.cantidad || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white p-4 rounded-lg uppercase text-xl"
          >
            Generar Venta
          </button>
        </form>
      </div>
    </section>
  );
}

export default SellForm;
