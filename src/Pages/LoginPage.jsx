import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedDBContext } from "../context/SelectedDBContext";
import LogoImg from "../assets/icons/surfdata.png";
import { stringify } from "postcss";

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage() {
  const [loginData, setLoginData] = useState([]);
  const [dataForm, setDataForm] = useState({ client: "", password: "" });
  const [inputError, setInputError] = useState(false);
  const { setDb } = useContext(SelectedDBContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(API_URL + "/clients");
        const responseJSON = await response.json();
        setLoginData(responseJSON);
      } catch {
        console.error("Error with fetch data");
      }
    };

    fetchingData();
  }, []);

  const handleLogin = async () => {
    if (!dataForm.client || !dataForm.password) {
      setInputError(true);
      return;
    }

    try {
      const response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: stringify({
          clientId: dataForm.client,
          password: dataForm.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Credenciales invalidas o fallo del servidor");
      }

      const responseData = await response.json();

      if (responseData.success) {
        setDb(responseData.dbName);
        navigate(`/${responseData.dbClient}/dashboard`);
      } else {
        inputError(true);
      }
    } catch (e) {
      console.log(`Error with request type post: ${e}`);
    }
  };

  function changeStyleError(color) {
    let style = `w-full p-2.5 bg-${color}-100 border-${color}-300 border-2 outline-none text-gray-900 rounded-lg`;
    return style;
  }

  let stylesInputError = inputError
    ? changeStyleError("red")
    : changeStyleError("gray");

  return (
    <div className="h-screen w-screen overflow-hidden flex justify-center items-center bg-blue-900 text-white text-xl">
      <main className="form-signin h-auto max-h-[95%] w-[90%] bg-black rounded-lg bg-opacity-80 max-w-[490px] overflow-hidden">
        <form className="flex justify-center items-center flex-col px-5 py-3">
          <div className="w-40 h-40 rounded-full bg-sky-950 p-5 flex justify-center items-center m-2">
            <img src={LogoImg} alt="Surf Data Logo" />
          </div>
          <h1 className="h3 mb-3 font-normal capitalize">
            Por favor regístrate
          </h1>

          <div className="form-floating flex justify-center flex-col gap-3 w-full">
            <select
              className="w-full p-2.5 bg-gray-100 border-2 border-gray-300 outline-none text-gray-900 rounded-lg"
              name="Bases_de_datos"
              id="select_DB"
            >
              <option disabled="true" selected="true">
                Selecciona un proyecto
              </option>
              <optgroup label="Bases de datos disponibles">
                {/* Print names */}
                {loginData.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </optgroup>
            </select>
            <div className="w-full flex flex-col">
              <label htmlFor="loginPassword">Introduce tu contraseña:</label>
              <input
                type="password"
                className={stylesInputError}
                id="loginPassword"
                placeholder="Password"
                maxLength={4}
                //! Send Data onChange={(e) => setDataForm()}
              />
              {inputError && (
                <p className="text-red-500 text-sm">Contraseña incorrecta</p>
              )}
            </div>
            <button
              type="button"
              className="bg-indigo-500 p-2.5 rounded-lg uppercase"
              onClick={handleLogin()}
            >
              Ingresar
            </button>
          </div>
          <p className="m-3">Sistema Administrativo</p>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
