import LogoImg from "../assets/imgs/logo.png";

function Login() {
  return (
    <div className="h-dvh w-screen flex justify-center items-center bg-blue-dark text-white text-xl">
      <main className="form-signin h-auto w-[90%] max-w-[90%] bg-black rounded-lg bg-opacity-80">
        <form className="flex justify-center items-center flex-col p-5">
          <img
            className="mb-4 w-48 h-48 rounded-full"
            src={LogoImg}
            alt="Surf Data Logo"
          />
          <h1 className="h3 mb-3 fw-normal capitalize">Por favor registrate</h1>

          <div className="form-floating flex justify-center  flex-col gap-3  w-full">
            <select
              // className="outline-none text-black px-2 py-1 rounded-md w-full"
              className="w-full p-2.5 bg-gray-100 border border-gray-300 outline-none text-gray-900 rounded-lg"
              name="Bases_de_datos"
              id="select_DB"
            >
              <option disabled selected>
                Selecciona un proyecto
              </option>
              <optgroup label="Bases de datos disponibles">
                <option value="">Fruit Burst</option>
                <option value="">Yummy Bakery</option>
                <option value="">Donamania</option>
                <option value="">Skitland</option>
              </optgroup>
            </select>
            <div className="w-full flex flex-col">
              <label htmlFor="">Introduce tu contraseña:</label>
              <input
                type="password"
                className="w-full p-2.5 bg-gray-100 border border-gray-300 outline-none text-gray-900  rounded-lg"
                id="floatingPassword"
                placeholder="Password"
              />
            </div>
            <button className="bg-indigo-500 p-2.5 rounded-lg uppercase">
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
