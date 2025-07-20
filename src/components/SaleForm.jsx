import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SaleFormContext } from "../context/SaleFormContext";
import { FormDataContext } from "../context/FormDataContext";
import InputField from "./InputField";

function SaleForm() {
  const { empresa } = useParams();
  const { formData, setFormData } = useContext(FormDataContext);
  const { setSaleFormOpen } = useContext(SaleFormContext);

  const normalizedEmpresa = empresa.toLowerCase().replace(/ /g, "");
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      tableName: normalizedEmpresa,
    }));
  }, [normalizedEmpresa, setFormData]);

  const handleCreateSale = async (e) => {
    e.preventDefault();
    console.log(formData);
    setSaleFormOpen(false);

    try {
      const response = await fetch(API_URL + "/newSale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await response.json();
      alert("Venta creada con éxito");

      setFormData({
        producto: "",
        precio: 0,
        cantidad: 1,
      });
    } catch (error) {
      alert(`Error al crear la venta: ${error.message}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="min-h-screen w-screen absolute inset-0 flex justify-center items-center overflow-hidden">
      <div
        className="h-full w-full absolute z-[101] right-0 top-0 bg-black bg-opacity-50 overflow-hidden"
        onClick={() => setSaleFormOpen(false)}
      ></div>
      <div className="absolute z-[200] w-full max-w-md bg-[#212529] p-6 rounded-lg flex justify-center items-center overflow-hidden">
        <form
          onSubmit={handleCreateSale}
          className="flex flex-col gap-4 text-white overflow-hidden"
        >
          <h6 className="text-3xl uppercase font-bold text-center">
            Crear nueva venta
          </h6>
          <InputField
            label="Nombre del producto"
            type="text"
            id="producto"
            name="producto"
            placeholder="Laptop Samsung..."
            onChange={handleInputChange}
          />
          <div className="flex gap-3">
            <InputField
              label="Precio"
              type="number"
              id="precio"
              name="precio"
              placeholder="0.00"
              onChange={handleInputChange}
              step="0.01"
              min="0"
            />
            <InputField
              label="Cantidad"
              type="number"
              id="cantidad"
              name="cantidad"
              placeholder="2"
              onChange={handleInputChange}
              min="1"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg uppercase text-xl hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
          >
            Generar Venta
          </button>
        </form>
      </div>
    </section>
  );
}

export default SaleForm;
