import SurfDataLogo from "../assets/icons/logo-preview.png";
import VideoChangePage from "../assets/videos/waves2.mp4";
import WavesImg from "../assets/imgs/ocean2.jpg";
import "../design/waves.css";

function HomePage() {
  const handleAnimation = () => {};

  return (
    <>
      <section className="h-screen w-screen flex justify-center items-center flex-col overflow-hidden relative z-10">
        <img
          className="object-fill w-screen h-screen absolute -z-10 contrast-100"
          src={WavesImg}
          alt="Waves"
        />

        <header className="h-20 w-full absolute top-0 backdrop-blur-2xl text-xl text-black">
          <div className="flex justify-between items-center w-[90%] h-full m-auto">
            <div className="h-20 w-20 bg-sky-950 rounded-full p-3">
              <img className="h-full" src={SurfDataLogo} alt="main logo" />
            </div>
            <nav className="flex h-full justify-center items-center space-x-6 capitalize font-extrabold font-agrandir">
              <p className="hover:cursor-pointer hover:underline">Inicio</p>
              <p className="hover:cursor-pointer hover:underline">
                Información
              </p>
              <p className="hover:cursor-pointer hover:underline">Servicios</p>
              <p className="hover:cursor-pointer hover:underline text-white bg-sky-950 rounded-lg px-3 py-2">
                <a
                  onClick={handleAnimation}
                  className="px-3 py-2"
                  href="http://localhost:5173/login"
                >
                  Login
                </a>
              </p>
            </nav>
          </div>
        </header>

        <hgroup className="text-center">
          <h1
            id="title"
            className="font-black text-8xl uppercase text-white shadow-custom mb-3"
          >
            Surf Data
          </h1>
          <h2 className="font-black text-2xl uppercase text-white shadow-custom backdrop-blur-sm border-2 border-white rounded-lg p-2">
            “Código y acción, tu éxito en cada inversión“
          </h2>
        </hgroup>

        <footer></footer>
      </section>
      {/* <div className="ocean">
        <div className="wave"></div>
        <div className="wave wave2"></div>
      </div> */}
      <footer></footer>
    </>
  );
}

export default HomePage;
