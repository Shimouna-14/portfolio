import Header from "./Header";
import { Carousel, IconButton } from "@material-tailwind/react";

function Parcours() {
  return (
    <>
      <Header titre="Parcours" className="text-blue" />
      <section className="h-full flex justify-center items-center">
        <section className="w-3/4 m:w-4/5 sm:w-[100%] h-[60%] sm:h-[75%] lg:mt-12 sm:mt-20 m:ml-16 lg:ml-0">
          <Carousel
            navigation={() => <div className="none"></div>}
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
            <section className="flex flex-col justify-center items-center h-full mx-12 text-center">
              <div className="bg-blue flex flex-col justify-center items-center rounded-3xl p-5 mb-10 w-[80%] sm:w-full">
                <p className="text-3xl sm:text-2xl mb-3 mx-5">
                  Concepteur d'application web
                </p>
                <p className="text-lg ">
                  Neuilly-Sur-Seine (92) <br/> Avril 2023 - Février 2024
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-xl sm:text-lg mx-10">
                <p className="mb-2 sm:mb-5">Création de maquette</p>
                <p className="mb-2 sm:mb-5">
                  Maintenance et assistance sur WordPress
                </p>
                <p>Création de site web sur WordPress et en ReactJS</p>
              </div>
            </section>

            <section className="flex flex-col justify-center items-center h-full mx-12">
              <div className="bg-green flex flex-col justify-center items-center rounded-3xl p-5 w-[80%] sm:w-full text-center">
                <p className="text-3xl sm:text-2xl mb-3 mx-5">OpenClassroom</p>
                <p className="text-lg ">
                  Formation de Développeur Web <br/> Mars 2021 - Juin 2022
                </p>
              </div>
              <section className="flex flex-col justify-center text-2xl">
                <p className="my-2 text-xl">
                  Projets réalisés pendant la formation :
                </p>
                <ul class="list-disc list-inside lg:text-lg text-base">
                  <li>
                    <a className="transition-all ease-in-out duration-300 hover:text-black/60" target="_blank" href="https://shimouna-14.github.io/NDEBY_Veronique_Chimene_2_12042021/">
                      Transformer une maquette en site web avec HTML & CSS
                    </a>
                  </li>

                  <li>
                    <a className="transition-all ease-in-out duration-300 hover:text-black/60" target="_blank" href="https://shimouna-14.github.io/NDEBY_Veronique_Chimene_3_06062021/">Dynamiser une page web avec des animations CSS</a>
                  </li>
                  <li>
                    <a className="transition-all ease-in-out duration-300 hover:text-black/60" target="_blank" href="https://shimouna-14.github.io/NDEBY_Veronique_Chimene_4_20072021/">Optimiser un site web existant</a>
                  </li>
                  <li>
                    <a className="transition-all ease-in-out duration-300 hover:text-black/60">Construire un site e-commerce en JavaScript</a>
                  </li>
                  <li>
                    <a className="transition-all ease-in-out duration-300 hover:text-black/60">
                      Construire une API sécurisée pour une application
                      d'avisgastronomiques
                    </a>
                  </li>
                  <li>
                    <a className="transition-all ease-in-out duration-300 hover:text-black/60" >Créez un réseau social d'entreprise</a>
                  </li>
                </ul>
              </section>
            </section>

            <section className="flex flex-col justify-center items-center h-full mx-12 text-center">
              <div className="bg-blue flex flex-col justify-center items-center rounded-3xl p-5 mb-10 w-[80%] sm:w-full ">
                <p className="text-3xl sm:text-2xl mb-3 mx-5">
                  Titre profesionnel web
                </p>
                <p className="text-lg">
                  Taverny (95) <br/> Octobre - Décembre 2020
                </p>
              </div>
              <p className="text-2xl sm:text-xl leading-10 mx-5">
                Développer la partie frontend d'une application web et web
                mobile
              </p>
            </section>

            <section className="flex flex-col justify-center items-center h-full mx-12 text-center">
              <div className="bg-green flex flex-col justify-center items-center rounded-3xl p-5 mb-10 w-[80%] sm:w-full">
                <p className="text-3xl sm:text-2xl mb-3">Baccalauréat</p>
                <p className="text-lg">
                  Sarcelles (95) <br/> Septembre 2019 - Juin 2020
                </p>
              </div>
              <p className="text-2xl sm:text-xl leading-10 mx-5">
                Sciences et Technologies de l'Industrie et du Développement
                Durable <br />
                Option Système Informatique et numérique
              </p>
            </section>
          </Carousel>
        </section>

        <div className="absolute left-0 border-r border-black h-full w-16 bg-white z-[3] sm:hidden"></div>

        <div className="absolute bottom-16 sm:bottom-14 border-t border-black w-full sm:hidden"></div>
      </section>
    </>
  );
}

export default Parcours;
