import { Chevron } from "../assets/chevron";
import Header from "./Header";
import { Carousel, IconButton } from "@material-tailwind/react";

function Parcours() {
  return (
    <>
      <Header titre="Parcours" />

      <section className="h-full flex justify-center items-center">
        <section className="w-3/4 m:w-4/5 sm:w-[90%] h-[60%] sm:h-[75%] lg:mt-12 sm:mt-20 ml-16 lg:ml-0">
          <Carousel
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-1 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 right-1 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}

          >
            <section className="flex flex-col justify-center items-center h-full mx-12 ">
              <div className="bg-blue flex flex-col justify-center items-center rounded-3xl py-5 mb-10 w-[80%] sm:w-full ">
                <p className="text-3xl sm:text-2xl mb-3 mx-5 text-center">
                  Concepteur d'application web
                </p>
                <p className="text-lg">Neuilly-Sur-Seine (92)</p>
              </div>
              <div className="flex flex-col justify-center items-center text-xl sm:text-lg mx-10">
                <p className="mb-2 sm:mb-5 text-center">Création de maquette</p>
                <p className="mb-2 sm:mb-5 text-center">Maintenance et assistance sur WordPress</p>
                <p className="text-center">Création de site web sur WordPress et en ReactJS</p>
              </div>
            </section>

            <section className="flex flex-col justify-center items-center h-full mx-12">
              <div className="bg-green flex flex-col justify-center items-center rounded-3xl py-5 mb-10 w-[80%] sm:w-full">
                <p className="text-3xl sm:text-2xl mb-3 mx-5">OpenClassroom</p>
                <p className="text-lg text-center">Formation de Développeur Web </p>
              </div>
              <section className="flex flex-col justify-center text-2xl">
                <p className="mb-2 text-xl">
                  Projets réalisés pendant la formation :
                </p>
                <ul class="list-disc list-inside lg:text-lg text-base">
                  <li>Transformer une maquette en site web avec HTML & CSS </li>
                  <li>Dynamiser une page web avec des animations CSS</li>
                  <li>Optimiser un site web existant</li>
                  <li>Construire un site e-commerce en JavaScript</li>
                  <li>
                    Construire une API sécurisée pour une application
                    d'avisgastronomiques
                  </li>
                  <li>Créez un réseau social d'entreprise</li>
                </ul>
              </section>
            </section>

            <section className="flex flex-col justify-center items-center h-full mx-12 ">
            <div className="bg-blue flex flex-col justify-center items-center rounded-3xl py-5 mb-10 w-[80%] sm:w-full ">
                <p className="text-3xl sm:text-2xl mb-3 mx-5 text-center">Titre profesionnel web</p>
                <p className="text-lg">Taverny (95)</p>
              </div>
              <p className="text-center text-2xl sm:text-xl leading-10 mx-5">
                Développer la partie frontend d'une application web et web
                mobile enInformatique
              </p>
            </section>

            <section className="flex flex-col justify-center items-center h-full mx-12 ">
                <div className="bg-green flex flex-col justify-center items-center rounded-3xl py-5 mb-10 w-[80%] sm:w-full">
                <p className="text-3xl sm:text-2xl mb-3">Baccalauréat</p>
                <p className="text-lg">Sarcelles (95)</p>
              </div>
              <p className="text-center text-2xl sm:text-xl leading-10 mx-5">
                Sciences et Technologies de l'Industrie et du Développement
                Durable <br />
                Option Système Informatique et numérique
              </p>
            </section>
          </Carousel>
        </section>

        <div className="absolute left-0 border-r border-black h-full w-16 bg-white z-[4]"></div>
        {/* left Chevron */}
        <span className="absolute left-2 ease-in-out duration-300 hover:left-0 cursor-pointer z-[5]">
          <Chevron />
        </span>
        <div className="absolute bottom-16 border-t border-black w-full"></div>
        {/* Down Chevron */}
        <span className="absolute -rotate-90 bottom-2 ease-in-out duration-300 hover:bottom-0 cursor-pointer">
          <Chevron />
        </span>
      </section>
    </>
  );
}

export default Parcours;
