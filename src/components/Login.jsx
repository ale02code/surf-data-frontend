import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/imgs/logo.png";

function Login() {
  const [loginData, setLoginData] = useState({ login_data: [] });
  const [password, setPassword] = useState("");
  const [selectedKey, setSelectedKey] = useState("");
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("https://sales-manager-api.onrender.com/");
        const responseJSON = await response.json();
        setLoginData(responseJSON);
      } catch (e) {
        console.error(`Error with fetch data: ${e}`);
      }
    };

    fetchingData();
  }, []);

  const handleSelect = (llave) => {
    setSelectedKey(llave);
  };

  const handleRegister = () => {
    const selectedDB = loginData.login_data.find(
      (db) => db.llave === selectedKey
    );

    if (selectedDB && selectedDB.llave === password) {
      navigate(
        `https://sales-manager-api.onrender.com/${selectedDB.empresa}/dashboard`
      );
    } else {
      setInputError(true);
    }
  };

  let stylesInputError = inputError
    ? "w-full p-2.5 bg-red-100 border-2 border-red-300 outline-none text-gray-900 rounded-lg"
    : "w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg";

  return (
    <div className="h-dvh w-screen overflow-hidden flex justify-center items-center bg-blue-dark text-white text-xl">
      <main className="form-signin h-auto max-h-[95%] w-[90%] bg-black rounded-lg bg-opacity-80 max-w-[490px] overflow-hidden">
        <form className="flex justify-center items-center flex-col px-5 py-3">
          <img
            className="mb-2 w-44 h-44 rounded-full"
            src={LogoImg}
            alt="Surf Data Logo"
          />
          <h1 className="h3 mb-3 fw-normal capitalize">Por favor registrate</h1>

          <div className="form-floating flex justify-center flex-col gap-3 w-full">
            <select
              className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg"
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
                className={stylesInputError}
                id="floatingPassword"
                placeholder="Password"
                maxLength={4}
                onChange={(e) => setPassword(e.target.value)}
              />
              {inputError && (
                <small className="text-red-300">contraseña incorrecta</small>
              )}
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
