import { useContext } from "react";
import { SellFormContext } from "../context/SellFormContext";

function SellForm() {
  // Contexts
  const { setSellFormOpen } = useContext(SellFormContext);

  const handleSellForm = () => {
    setSellFormOpen((prevState) => !prevState);
  };

  return (
    <section className="w-screen h-screen fixed z-0 top-0 flex justify-center items-center">
      <div
        className="h-screen w-screen bg-white-back"
        onClick={handleSellForm}
      ></div>
      <div className="w-[95%] max-w-[450px] text-white sm:w-90 absolute z-20">
        <form className="bg-[#212529] p-4 rounded-lg flex justify-center flex-col sm:p-10">
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
              />
            </div>
            <div>
              <label htmlFor="producto" className="text-lg">
                Producto
              </label>
              <input
                type="text"
                name="pruducto"
                placeholder="Producto..."
                required
                id="nombre"
                className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg text-lg"
              />
            </div>
            <div className="flex w-full gap-[3%]">
              <div className="w-full flex flex-col">
                <label htmlFor="nombre" className="text-lg">
                  Precio
                </label>
                <input
                  type="text"
                  name="precio"
                  placeholder="$ 0.00"
                  id="precio"
                  className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg text-lg"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="nombre" className="text-lg">
                  Cantidad
                </label>
                <input
                  type="number"
                  name="nombre"
                  placeholder="4"
                  max={5}
                  min={1}
                  title="cantidad debe estar entre 1 a 5"
                  required
                  id="nombre"
                  className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg mb-6 text-lg"
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
