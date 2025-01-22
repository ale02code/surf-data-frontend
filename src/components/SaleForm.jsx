import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SellFormContext } from "../context/SellFormContext";
import { FormDataContext } from "../context/FormDataContext";
import InputField from "./InputField";

function SaleForm() {
  const { empresa } = useParams();
  const { formData, setFormData } = useContext(FormDataContext);
  const { setSellFormOpen } = useContext(SellFormContext);

  const normalizedEmpresa = empresa.toLowerCase().replace(/ /g, "");
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log(normalizedEmpresa);
  }, []);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      tableName: normalizedEmpresa,
    }));

    console.log(normalizedEmpresa);
  }, [normalizedEmpresa, setFormData]);

  const handleSaleForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    setSellFormOpen(false);

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
    <section className="w-screen h-screen fixed z-50 top-0 left-0 flex justify-center items-center mb-5">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setSellFormOpen(false)}
      ></div>
      <div className="relative z-20 w-[95%] max-w-md bg-[#212529] p-6 rounded-lg">
        <form
          onSubmit={handleSaleForm}
          className="flex flex-col gap-4 text-white"
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
            />
            <InputField
              label="Cantidad"
              type="number"
              id="cantidad"
              name="cantidad"
              placeholder="2"
              onChange={handleInputChange}
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
