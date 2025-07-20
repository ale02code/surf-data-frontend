import { useState, useEffect } from "react";

import MenuImg from "../assets/icons/menu.svg";
import CloseImg from "../assets/icons/close.svg";
import OceanImg from "../assets/imgs/ocean.jpg";
import WaveImg from "../assets/imgs/wave.png";
import MacImg from "../assets/imgs/Mac-Screen.png";
import WaveBorderImg from "../assets/imgs/waveBorder.png";
import WaveBorderImg2 from "../assets/imgs/waveBorder2.png";
import AutoIcon from "../assets/icons/auto.svg";
import DataIcon from "../assets/icons/data.svg";
import SecurityIcon from "../assets/icons/security.svg";
import OracleImg from "../assets/imgs/oracle.png";
import HubspotImg from "../assets/imgs/hubspot.png";
import GoogleAnalyticsImg from "../assets/imgs/google-analytics.png";
import IBMImg from "../assets/imgs/ibm.png";
import BillIcon from "../assets/icons/bill.svg";
import OctopusImg from "../assets/icons/octopus.png";
import TurtleImg from "../assets/icons/turtle.png";
import FishImg from "../assets/icons/fish.png";
import AnchorImg from "../assets/icons/anchor-dorado.png";
import InstagramIcon from "../assets/icons/instagram.svg";
import WhatsappIcon from "../assets/icons/whatsapp.svg";
import GithubIcon from "../assets/icons/github.svg";
import BenefitCard from "../components/BenefitCard";

import Title from "../components/Title";
import ServiceCard from "../components/ServiceCard";

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
  }, []);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <div className="relative">
      {/* Home Section */}
      <section className="h-screen w-screen flex justify-center items-center flex-col overflow-x-hidden relative z-10">
        <img
          className="object-cover w-screen h-screen absolute -z-10 contrast-100"
          src={OceanImg}
          alt="Waves"
          draggable="false"
        />

        {/* Close menu */}
        <div
          className={
            menu
              ? "hidden max-md:block max-md:top-5 max-md:right-5 max-md:z-50 max-md:fixed"
              : "hidden"
          }
        >
          <img
            className="h-10"
            src={CloseImg}
            alt="Close Img"
            onClick={handleMenu}
          />
        </div>
        <div
          className={
            menu
              ? "hidden"
              : "hidden max-md:block max-md:absolute max-md:top-3 max-md:right-3 max-md:z-50"
          }
        >
          <img
            className="h-16"
            src={MenuImg}
            alt="Close Img"
            onClick={handleMenu}
          />
        </div>

        <header
          className={
            menu
              ? "h-20 w-full absolute top-0 backdrop-blur-2xl text-xl text-black max-md:text-white max-md:bg-neutral-900 max-md:h-full max-md:w-full max-md:z-40 max-md:right-0 max-md:fixed border-b border-gray-300"
              : "h-20 w-full absolute top-0 backdrop-blur-2xl text-xl text-black max-md:text-white max-md:bg-neutral-900 max-md:h-max max-md:w-max max-md:p-16 max-md:z-40 max-md:right-0 max-md:hidden border-b border-gray-300"
          }
        >
          <div className="flex justify-between items-center w-4/5 h-full m-auto max-md:w-full max-md:relative">
            <nav className="flex w-full h-full justify-between items-center capitalize font-bold font-linter max-md:flex-col max-md:justify-center max-md:items-center max-md:text-4xl">
              <div className="flex justify-center items-center space-x-6 max-md:flex-col max-md:space-x-0 max-md:space-y-6 max-md:mb-7">
                <p className="hover:cursor-pointer hover:underline">Inicio</p>
                <p className="hover:cursor-pointer hover:underline">
                  Información
                </p>
                <p className="hover:cursor-pointer hover:underline">
                  Servicios
                </p>
              </div>
              <div>
                <p className="hover:cursor-pointer hover:underline text-white bg-sky-950 rounded-lg px-3 py-2 max-md:py-3 max-md:px-9">
                  <a className="px-3 py-2" href="https://surfdata.online/login">
                    Login
                  </a>
                </p>
              </div>
            </nav>
          </div>
        </header>

        <hgroup className="text-center animation-fade">
          <h1
            id="title"
            className="font-black text-8xl uppercase text-white shadow-custom mb-3 max-md:text-6xl"
            draggable="false"
          >
            Surf Data
          </h1>
          <h2
            className="font-black text-2xl uppercase text-white shadow-custom backdrop-blur-sm border-2 border-white rounded-lg p-2 max-sm:max-w-[90%] max-sm:m-auto relative max-md:text-xl"
            draggable="false"
          >
            “Código y acción, tu éxito en cada inversión“
          </h2>
        </hgroup>
      </section>

      {/* Benefits Section */}
      <section className="bg-white h-max w-screen">
        <div className="h-full w-full mb-32 max-md:mb-0">
          <div className="h-16 shadow-md flex justify-between items-center max-md:h-28">
            <div className="flex justify-between items-center w-4/5 m-auto">
              <h5 className="font-linter uppercase font-bold text-xl max-md:text-lg">
                Empresas colaboradoras y partners
              </h5>
              <div className="h-full flex justify-center items-center gap-2 overflow-hidden max-md:flex-wrap">
                <img
                  className="h-20 max-md:h-8"
                  src={OracleImg}
                  alt="Oracle"
                  draggable="false"
                />
                <img
                  className="h-10 max-md:h-8"
                  src={GoogleAnalyticsImg}
                  alt="GoogleAnalytics"
                  draggable="false"
                />
                <img
                  className="h-10 max-md:h-8"
                  src={HubspotImg}
                  alt="Hubspot"
                  draggable="false"
                />
                <img className="h-20 max-md:h-8" src={IBMImg} alt="IBM" />
              </div>
            </div>
          </div>
          <div className="w-4/5 h-full m-auto max-md:w-full">
            <Title
              text={`Principales beneficios de la integración de nuestro
              servicio`}
              color="text-gray-800"
            />
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
        <img className="w-full" src={WaveBorderImg2} alt="Wave Border" />
        <section className="h-72 bg-gray-800 flex justify-center items-center max-md:h-max max-md:py-6">
          <div className="w-4/5 text-white m-auto overflow-hidden flex justify-evenly items-center flex-wrap">
            <article className="w-3/6 max-md:w-full overflow-hidden">
              <h3 className="text-3xl font-bold font-linter capitalize max-md:text-center">
                Conoce de Surf Data!
              </h3>
              <p className="text-lg text-neutral-100 mb-4 max-md:text-justify">
                {isMobile ? (
                  <>
                    Impulsar nuestros servicios digitales a un ámbito contable,
                    ofreciendo calidad de soluciones para{" "}
                    <mark className="bg-violet-400 text-white px-1 font-semibold">
                      mejorar la eficiencia operativa
                    </mark>{" "}
                    y la toma de decisiones estratégicas.
                  </>
                ) : (
                  <>
                    Impulsar nuestros servicios digitales a un ámbito contable,
                    ofreciendo calidad de soluciones para mejorar la eficiencia
                    operativa y la toma de decisiones estratégicas de nuestros
                    clientes,{" "}
                    <mark className="bg-violet-400 text-white px-1 font-semibold">
                      permitiéndoles alcanzar un nuevo nivel
                    </mark>{" "}
                    de excelencia y competitividad.
                  </>
                )}
              </p>
            </article>
            <div className="h-60">
              <img
                className="h-full object-cover animation-balance"
                src={OctopusImg}
                alt="Octopus Image"
                draggable="false"
              />
            </div>
          </div>
        </section>
        <img className="w-full" src={WaveBorderImg} alt="Wave Border" />
      </section>

      {/* Plans Section */}
      <section className="bg-white w-screen h-max overflow-hidden">
        <div className="w-4/5 h-max flex flex-col justify-center items-center m-auto">
          <Title
            text="Descubra nuestros planes personalizados, diseñados para su empresa"
            color="text-gray-800"
          />
          <div className="flex gap-8 flex-wrap justify-center mb-2">
            <ServiceCard
              color="sky"
              img={FishImg}
              title="Fish"
              desc="Paquete perfecto para proyectos personales."
              advantages={[
                "Diseñado para proyecto pequeños",
                "Acceso a reportes básicos.",
                "Interfaz fácil de usar.",
                "Actualizaciones periódicas garantizadas.",
              ]}
              price="3,99"
              draggable="false"
            />
            <ServiceCard
              color="yellow"
              img={AnchorImg}
              title="Anchor"
              desc="Disfruta de un rendimiento optimizado y recursos potentes."
              advantages={[
                "Optimizado para empresas en crecimiento.",
                "Reportes avanzados de ventas.",
                "Mayor capacidad de almacenamiento.",
                "Soporte dedicado y rápido.",
              ]}
              price="8,99"
              draggable="false"
            />
            <ServiceCard
              color="green"
              img={TurtleImg}
              title="Turtle"
              desc="Sube de nivel con más potencia y funciones mejoradas."
              advantages={[
                "Funcionalidades completas para corporaciones.",
                "Integración con herramientas externas.",
                "Análisis predictivo con inteligencia artificial.",
                "Soporte premium disponible 24/7.",
              ]}
              price="6,99"
              draggable="false"
            />
          </div>
        </div>
      </section>

      {/* Footer Page */}
      <div className="h-max relative">
        <footer className="w-screen h-max overflow-hidden z-50">
          <img
            className="overflow-hidden h-max w-full object-cover"
            src={WaveImg}
            alt="Wave"
            draggable="false"
          />
          <section className="h-64 w-full bg-sky-950 pb-2 text-white max-md:h-auto max-md:pb-5">
            <div className="h-full flex justify-center items-start w-4/5 gap-8 m-auto overflow-hidden max-md:flex-col">
              <div className="h-full w-1/2 flex justify-center items-center max-md:w-full">
                <img
                  className="h-full w-max object-contain max-md:w-full"
                  src={MacImg}
                  alt="Mac Picture"
                  draggable="false"
                />
              </div>
              <div className="w-1/2 flex flex-col justify-evenly gap-6 h-full max-md:w-full">
                <form className="flex w-full border-2 border-white rounded-3xl overflow-hidden text-lg">
                  <input
                    type="email"
                    className="w-3/4 p-2 outline-none text-black rounded-none"
                    placeholder="Your e-mail"
                  />
                  <input
                    type="submit"
                    className="w-1/4 bg-[#69b3f8] cursor-pointer font-bold text-sky-950 rounded-none"
                  />
                </form>
                <div className="w-full flex justify-around items-start">
                  <div className="max-md:text-center">
                    <h6 className="mb-2 font-semibold text-2xl font-linter">
                      Alliance
                    </h6>
                    <p>Websites</p>
                    <p>Social Media</p>
                    <p>Branding</p>
                  </div>
                  <div className="max-md:text-center">
                    <h6 className="mb-2 font-semibold text-2xl font-linter">
                      About
                    </h6>
                    <p>Our projects</p>
                    <p>Careers</p>
                  </div>
                  <div className="max-md:text-center">
                    <h6 className="mb-2 font-semibold text-2xl font-linter">
                      Support
                    </h6>
                    <p>Support request</p>
                    <p>Contact</p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-between items-center text-lg">
                  <span className="w-full h-1 border-b border-neutral-300 mb-2" />
                  <div className="h-8 w-full flex justify-between max-md:mt-1">
                    <p className="font-bold text-white font-linter">
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

      {/* Rights */}
      <div className="h-10 w-full bg-neutral-900 text-white flex justify-center items-center">
        <p className="text-center text-lg">
          designed and developed by
          <a
            className="font-linter font-semibold mx-1"
            href="https://www.instagram.com/ale02.code/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            ale02code
          </a>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
