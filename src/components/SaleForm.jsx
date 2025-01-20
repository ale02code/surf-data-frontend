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
    <section className="w-screen h-screen fixed z-50 top-0 left-0 flex justify-center items-center">
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
          {/* <label htmlFor=""></label>
          <select
            className="w-full p-2 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-900 outline-none"
            name=""
            id="status"
          >
            <option className="text-black" value="False">
              False
            </option>
            <option className="text-black" value="True">
              True
            </option>
          </select> */}
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

export default SaleForm;
