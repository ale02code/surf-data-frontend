import OceanImg from "../assets/imgs/ocean.jpg";
import WaveImg from "../assets/imgs/wave.svg";
import MacImg from "../assets/imgs/Mac-Screen.png";

function HomePage() {
  return (
    <div className="relative">
      {/* Home Section */}
      <section className="h-screen w-screen flex justify-center items-center flex-col overflow-x-hidden relative z-10">
        <img
          className="bject-cover w-screen h-screen absolute -z-10 contrast-100"
          src={OceanImg}
          alt="Waves"
          draggable="false"
        />

        <header className="h-20 w-full absolute top-0 backdrop-blur-2xl text-xl text-black">
          <div className="flex justify-between items-center w-[90%] h-full m-auto">
            <nav className="flex w-full h-full justify-between items-center capitalize font-extrabold font-agrandir">
              <div className="flex justify-center items-center space-x-6">
                <p className="hover:cursor-pointer hover:underline">Inicio</p>
                <p className="hover:cursor-pointer hover:underline">
                  Información
                </p>
                <p className="hover:cursor-pointer hover:underline">
                  Servicios
                </p>
              </div>
              <div>
                <p className="hover:cursor-pointer hover:underline text-white bg-sky-950 rounded-lg px-3 py-2">
                  <a className="px-3 py-2" href="http://localhost:5173/login">
                    Login
                  </a>
                </p>
              </div>
            </nav>
          </div>
        </header>

        <hgroup className="text-center">
          <h1
            id="title"
            className="font-black text-8xl uppercase text-white shadow-custom mb-3"
            draggable="false"
          >
            Surf Data
          </h1>
          <h2
            className="font-black text-2xl uppercase text-white shadow-custom backdrop-blur-sm border-2 border-white rounded-lg p-2 max-sm:max-w-[90%] max-sm:m-auto"
            draggable="false"
          >
            “Código y acción, tu éxito en cada inversión“
          </h2>
        </hgroup>
      </section>

      {/* Information Section */}
      {/* Yellow: #FFFFAA Gray: #bg-gray-800 */}
      <section className="bg-gray-800 h-screen w-screen z-50 relative">
        <p className="text-9xl">overflow-x-hidden</p>
      </section>
      {/* Services Section */}
      <section className="bg-white h-screen w-screen z-50 relative">
        <p className="text-9xl">overflow-x-hidden</p>
      </section>

      {/* Footer Page */}
      <footer className="w-screen h-auto absolute bottom-0 overflow-hidden z-50">
        <img
          className="overflow-hidden h-max w-full object-cover"
          src={WaveImg}
          alt="Wave"
        />
        <section className="h-full w-full bg-sky-950 pb-4 text-white">
          <div className="flex justify-center items-center w-[80%] h-full m-auto overflow-hidden">
            <div className="h-max w-1/2 flex justify-center items-center">
              <img className="h-max w-max object-cover" src={MacImg} alt="Mac Picture" />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start h-full">
              <form className="flex w-full border-2 border-white rounded-xl overflow-hidden text-lg">
                <input
                  type="email"
                  className="w-3/4 p-2 outline-none text-black"
                  placeholder="Your e-mail"
                />
                <input
                  type="submit"
                  className="w-1/4 bg-[#69b3f8] p-2 cursor-pointer font-bold text-sky-950"
                />
              </form>
              <div className="w-full flex justify-evenly">
                <div>
                  <h6 className="mb-2 font-bold text-lg">Partnership</h6>
                  <p>Websites</p>
                  <p>Social Media</p>
                  <p>Branding</p>
                </div>
                <div>
                  <h6 className="mb-2 font-bold text-lg">About</h6>
                  <p>Our projects</p>
                  <p>Careers</p>
                </div>
                <div>
                  <h6 className="mb-2 font-bold text-lg">Support</h6>
                  <p>Support request</p>
                  <p>Contact</p>
                </div>
              </div>
              <span className="w-full h-1 border-b border-neutral-300" />
              <div className="w-full flex justify-between items-center text-lg">
                <p>All rights reserved 2024</p>
                <div>
                  <p>Social Networks</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default HomePage;
