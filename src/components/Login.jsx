import { useEffect, useState } from "react";
import LogoImg from "../assets/imgs/logo.png";

function Login() {
  const [loginData, setLoginData] = useState({ login_data: [] });
  const [password, setPassword] = useState('');
  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("/api/");
        const responseJSON = await response.json();
        setLoginData(responseJSON);
      } catch (e) {
        console.error(`Error with fetch data: ${e}`);
      }
    };

    fetchingData();
  }, []);

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  const handleSelect = (llave) => {
    setSelectedKey(llave);
  };

  const handleRegister = () => {
    if (selectedKey === password) {
      console.log("Registro exitoso");
    } else {
      console.log("La contraseña no coincide con la llave seleccionada");
    }
  };

  return (
    <div className="h-dvh w-screen flex justify-center items-center bg-blue-dark text-white text-xl">
      <main className="form-signin h-auto w-[90%] bg-black rounded-lg bg-opacity-80 max-w-[490px]">
        <form className="flex justify-center items-center flex-col p-5">
          <img
            className="mb-4 w-48 h-48 rounded-full"
            src={LogoImg}
            alt="Surf Data Logo"
          />
          <h1 className="h3 mb-3 fw-normal capitalize">Por favor registrate</h1>

          <div className="form-floating flex justify-center flex-col gap-3 w-full">
            <select
              className="w-full p-2.5 bg-gray-100 border border-gray-300 outline-none text-gray-900 rounded-lg"
              name="Bases_de_datos"
              id="select_DB"
              defaultValue=""
              onChange={(e) => handleSelect(e.target.value)}
            >
              <option disabled value="">
                Selecciona un proyecto
              </option>
              <optgroup label="Bases de datos disponibles">
                {loginData.login_data.map((db) => (
                  <option key={db.id} value={db.llave}>
                    {db.empresa}
                  </option>
                ))}
              </optgroup>
            </select>
            <div className="w-full flex flex-col">
              <label htmlFor="floatingPassword">Introduce tu contraseña:</label>
              <input
                type="password"
                className="w-full p-2.5 bg-gray-100 border border-gray-300 outline-none text-gray-900 rounded-lg"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button
              type="button" 
              className="bg-indigo-500 p-2.5 rounded-lg uppercase"
              onClick={handleRegister} 
            >
              Ingresar
            </button>
          </div>
          <p className="mt-5 mb-3 text-body-secondary">
            Sistema Administrativo
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;
