import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/icons/surfdata.png";

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage() {
  const [dataForm, setDataForm] = useState({ userName: "", password: "" });
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  const handleFillDataFrom = (event) => {
    const { name, value } = event.target;
    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    if (!dataForm.userName || !dataForm.password) {
      setErrorLogin(true);
      return;
    }

    try {
      const response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: dataForm.userName,
          password: dataForm.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Credenciales invalidas o fallo del servidor");
      }

      const responseData = await response.json();

      if (responseData) {
        console.log("Login Exitoso");
        localStorage.setItem("token", responseData.token);
        navigate(`/${dataForm.userName}/dashboard`);
      }
    } catch (e) {
      console.log("Login Fallido: ", e);
      setErrorLogin(true);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex justify-center items-center bg-blue-900 text-white text-xl">
      <main className="form-signin h-auto max-h-[95%] w-[90%] bg-black rounded-lg bg-opacity-80 max-w-[490px] overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col px-5 py-3"
        >
          <header className="mb-3 flex justify-center items-center flex-col">
            <div className="w-40 h-40 rounded-full bg-sky-950 p-5 flex justify-center items-center my-2">
              <img src={LogoImg} alt="Surf Data Logo" />
            </div>
            <div>
              <h5 className="text-center font-linter">Login - Surf Data</h5>
            </div>
          </header>

          <div className="form-floating flex justify-center flex-col gap-3 w-full">
            <div className="w-full flex flex-col">
              <label htmlFor="loginUser">Introduce tu usuario</label>
              <input
                type="text"
                className="w-full p-2.5 bg-gray-100 border-gray-300 border-2 outline-none text-gray-900 rounded-lg"
                name="userName"
                id="loginUser"
                placeholder="User Name"
                onChange={handleFillDataFrom}
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="loginPassword">Introduce tu contraseña</label>
              <input
                type="password"
                className="w-full p-2.5 bg-gray-100 border-gray-300 border-2 outline-none text-gray-900 rounded-lg"
                name="password"
                id="loginPassword"
                placeholder="Password"
                onChange={handleFillDataFrom}
                maxLength={4}
              />
              {errorLogin && (
                <p className="text-red-500 text-base">
                  Credenciales Incorrectas
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-indigo-500 p-2.5 rounded-lg uppercase font-semibold"
              onClick={handleLogin}
            >
              Ingresar
            </button>
          </div>
          <p className="m-3 font-linter">Sistema Administrativo</p>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
