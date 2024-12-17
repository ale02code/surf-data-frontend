import OceanImg from "../assets/imgs/ocean.jpg";
import WaveImg from "../assets/imgs/wave.svg";
import MacImg from "../assets/imgs/Mac-Screen.png";
import WaveBorderImg from "../assets/imgs/waveBorder.png";
import AutoIcon from "../assets/icons/auto.svg";
import DataIcon from "../assets/icons/data.svg";
import SecurityIcon from "../assets/icons/security.svg";
import OracleImg from "../assets/imgs/oracle.png";
import HubspotImg from "../assets/imgs/hubspot.png";
import GoogleAnalyticsImg from "../assets/imgs/google-analytics.png";
import IBMImg from "../assets/imgs/ibm.png";
import BillIcon from "../assets/icons/bill.svg";
import OctopusImg from "../assets/icons/octopus.png";
import InstagramIcon from "../assets/icons/instagram.svg";
import WhatsappIcon from "../assets/icons/whatsapp.svg";
import GithubIcon from "../assets/icons/github.svg";
import BenefitCard from "../components/BenefitCard";

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
            className="font-black text-2xl uppercase text-white shadow-custom backdrop-blur-sm border-2 border-white rounded-lg p-2 max-sm:max-w-[90%] max-sm:m-auto relative"
            draggable="false"
          >
            “Código y acción, tu éxito en cada inversión“
          </h2>
        </hgroup>
      </section>

      {/* Benefits Section */}
      <section className="bg-white h-max w-screen z-50 relative">
        <div className="h-full w-full">
          <div className="h-16 shadow-md flex justify-between items-center">
            <div className="flex justify-between items-center w-4/5 m-auto">
              <h5 className="font-agrandir uppercase font-bold text-xl">
                Empresas colaboradoras y partners
              </h5>
              <div className="h-full flex justify-center items-center gap-2 overflow-hidden">
                <img className="h-20" src={OracleImg} alt="Oracle" />
                <img
                  className="h-10"
                  src={GoogleAnalyticsImg}
                  alt="GoogleAnalytics"
                />
                <img className="h-10" src={HubspotImg} alt="Hubspot" />
                <img className="h-20" src={IBMImg} alt="IBM" />
              </div>
            </div>
          </div>
          <div className="w-4/5 h-full m-auto">
            <h4 className="text-center text-gray-800 text-3xl text-balance font-black uppercase mb-16 mt-24">
              Principales beneficios de la integración de <br /> nuestro
              servicio
            </h4>
            <div className="flex justify-around flex-wrap gap-y-8 mb-20">
              <BenefitCard
                img={AutoIcon}
                title={"Automatización"}
                text={"Automatización en tu negocio"}
              />
              <BenefitCard
                img={DataIcon}
                title={"Analisis de Datos"}
                text={"Analisis de tus ventas"}
              />
              <BenefitCard
                img={SecurityIcon}
                title={"Seguridad"}
                text={"Seguridad y respaldo de datos"}
              />
              <BenefitCard
                img={BillIcon}
                title={"Facturación"}
                text={"Factura incluida en ventas"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-white h-max w-screen">
        <div>
          <img className="rotate-180" src={WaveBorderImg} alt="Wave Border" />
        </div>
        <section className="h-max bg-gray-800 flex justify-center items-center">
          <div className="w-4/5 text-white m-auto overflow-hidden flex justify-evenly items-center flex-wrap">
            <article className="w-3/6">
              <h3 className="text-3xl font-bold font-agrandir capitalize">
                Nice to Meet You!
              </h3>
              <p className="text-lg text-neutral-100 text-pretty">
                Impulsar nuestros servicios digitales a un ámbito contable,
                ofreciendo calidad de soluciones para mejorar la eficiencia
                operativa y la toma de decisiones estratégicas de nuestros
                clientes, permitiéndoles alcanzar un nuevo nivel de excelencia y
                competitividad.
              </p>
            </article>
            <div className="overflow-hidden h-60">
              <img
                className="h-full min-w-max"
                src={OctopusImg}
                alt="Octopus Image"
              />
            </div>
          </div>
        </section>
        <div>
          <img src={WaveBorderImg} alt="Wave Border" />
        </div>
      </section>

      {/* Plans Section */}
      <section className="bg-white w-screen z-50 relative h-max">
        <div className="w-4/5 h-screen flex justify-center items-center m-auto">
          <h4 className="text-center text-gray-800 text-3xl text-balance font-black uppercase mb-16 mt-24">
            Descubra nuestros planes personalizados, diseñados para su empresa
          </h4>
          
        </div>
      </section>

      {/* Footer Page */}
      <div className="min-h-screen relative">
        <footer className="w-screen h-max absolute bottom-0 overflow-hidden z-50">
          <img
            className="overflow-hidden h-max w-full object-cover"
            src={WaveImg}
            alt="Wave"
          />
          <section className="h-64 w-full bg-sky-950 pb-4 text-white">
            <div className="h-full flex justify-center items-start w-4/5 gap-8 m-auto overflow-hidden">
              <div className="h-full w-1/2 flex justify-center items-center">
                <img
                  className="h-full w-max object-contain"
                  src={MacImg}
                  alt="Mac Picture"
                />
              </div>
              <div className="w-1/2 flex flex-col justify-evenly gap-6 h-full">
                <form className="flex w-full border-2 border-white rounded-3xl overflow-hidden text-lg">
                  <input
                    type="email"
                    className="w-3/4 p-2 outline-none text-black"
                    placeholder="Your e-mail"
                  />
                  <input
                    type="submit"
                    className="w-1/4 bg-[#69b3f8]  cursor-pointer font-bold text-sky-950"
                  />
                </form>
                <div className="w-full flex justify-around items-start">
                  <div>
                    <h6 className="mb-2 font-bold text-2xl">Partnership</h6>
                    <p>Websites</p>
                    <p>Social Media</p>
                    <p>Branding</p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-bold text-2xl">About</h6>
                    <p>Our projects</p>
                    <p>Careers</p>
                  </div>
                  <div>
                    <h6 className="mb-2 font-bold text-2xl">Support</h6>
                    <p>Support request</p>
                    <p>Contact</p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-between items-center text-lg">
                  <span className="w-full h-1 border-b border-neutral-300 mb-2" />
                  <div className="h-8 w-full flex justify-between">
                    <p className="font-bold text-white">
                      All rights reserved 2024
                    </p>
                    <div className="flex space-x-2 h-full">
                      <div className="h-7 cursor-pointer overflow-hidden">
                        <a
                          href={"https://www.instagram.com/ale02.code/"}
                          target="_BLANK"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="h-full"
                            src={InstagramIcon}
                            alt="Social Icon"
                          />
                        </a>
                      </div>
                      <div className="h-7 cursor-pointer overflow-hidden">
                        <a
                          href={"https://wa.me/+50372878361"}
                          target="_BLANK"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="h-full"
                            src={WhatsappIcon}
                            alt="Social Icon"
                          />
                        </a>
                      </div>
                      <div className="h-7 cursor-pointer overflow-hidden">
                        <a
                          href={"https://github.com/ale02code"}
                          target="_BLANK"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="h-full"
                            src={GithubIcon}
                            alt="Social Icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
