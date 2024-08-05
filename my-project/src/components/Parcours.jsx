import { Carousel, IconButton } from "@material-tailwind/react";
import { Arrow } from '../assets/arrow'
import { Resevia } from '../assets/Reservia'
import ChouetteAgence from '../assets/la-chouette-agence.png'
import HotTakes from '../assets/hot-takes.png'
import Kanap from '../assets/kanap.png'
import Groupomania from '../assets/groupomania.png'
import ATH from '../assets/ath.png'
import Nessabeauty from '../assets/nessabeauty.png'

function Parcours() {
  return (
    <>
      <section className="flex justify-center items-center border border-b-brown border-t-brown mt-20 mb-10 pb-10">
        <section className="w-5/6 md:w-4/5 sm:w-full h-[60%] sm:h-[75%]">
          <Carousel
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex items-center -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "w-6 h-6 bg-brown" : "w-4 h-4 bg-brown/40"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-1 rotate-180 -translate-y-2/4"
              >
                <Arrow />
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
                <Arrow />
              </IconButton>
            )}
          >
            <section className="flex justify-center items-center mt-10 mb-20">
              <div className="flex justify-center items-center border border-brown w-5/6 h-96 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <div className="flex justify-center items-center flex-col bg-[#FCFCFC] px-5 text-center w-11/12 h-5/6 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                  <Resevia/>
                  <a className="transition-all ease-in-out duration-300 hover:underline"
                      target="_blank"
                      href="https://shimouna-14.github.io/NDEBY_Veronique_Chimene_2_12042021/">Transformer une maquette en site web avec HTML & CSS
                  </a>
                </div>
              </div>
            </section>
             
            <section className="flex justify-center items-center mt-10 mb-20">
              <div className="flex justify-center items-center border border-brown w-5/6 h-96 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <div className="flex justify-center items-center flex-col bg-[#FCFCFC] px-5 text-center w-11/12 h-5/6 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <p className="text-4xl mb-2 shrikhand">ohmyfood</p>
                <a className="transition-all ease-in-out duration-300 hover:underline"
                      target="_blank"
                      href="https://shimouna-14.github.io/NDEBY_Veronique_Chimene_3_06062021/">Dynamiser une page web avec des animations CSS
                  </a>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center mt-10 mb-20">
              <div className="flex justify-center items-center border border-brown w-5/6 h-96 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <div className="flex justify-center items-center flex-col bg-[#FCFCFC] px-5 text-center w-11/12 h-5/6 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <img src={ChouetteAgence} alt="Logo La Chouette Agence" />
                <a
                    className="transition-all ease-in-out duration-300 hover:underline"
                    target="_blank"
                    href="https://github.com/Shimouna-14/NDEBY_Veronique_Chimene_4_20072021"
                  >Analyser et optimiser le site</a>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center mt-10 mb-20">
              <div className="flex justify-center items-center border border-brown w-5/6 h-96 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <div className="flex justify-center items-center flex-col bg-[#FCFCFC] px-5 text-center w-11/12 h-5/6 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <img className="w-auto h-32" src={Kanap} alt="Logo Kanap" />
                <a
                    className="transition-all ease-in-out duration-300 hover:underline"
                    target="_blank"
                    href="https://github.com/Shimouna-14/NDEBY_Veronique_Chimene_5_30092021"
                  >Construire une e-commerce en JavaScript</a>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center mt-10 mb-20">
              <div className="flex justify-center items-center border border-brown w-5/6 h-96 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <div className="flex justify-center items-center flex-col bg-[#FCFCFC] px-5 text-center w-11/12 h-5/6 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <img className="w-auto h-16 mb-2" src={HotTakes} alt="Logo Hot Takes" />
                <a
                    className="transition-all ease-in-out duration-300 hover:underline"
                    target="_blank"
                    href="https://github.com/Shimouna-14/NDEBY_Veronique_Chimene_6_13012022/tree/master"
                  >Construire une API sécurisée pour une application d’avis gastronomique</a>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center mt-10 mb-20">
              <div className="flex justify-center items-center border border-brown w-5/6 h-96 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <div className="flex justify-center items-center flex-col bg-[#FCFCFC] px-5 text-center w-11/12 h-5/6 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <img className="bg-green p-4 rounded-3xl w-auto h-16 mb-4" src={Groupomania} alt="Logo Groupomania" />
                <a
                    className="transition-all ease-in-out duration-300 hover:underline"
                    target="_blank"
                    href="https://github.com/Shimouna-14/NDEBY_Veronique_Chimene_7_07032022"
                  >Créez un réseau social d’entreprise</a>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center mt-10 mb-20">
              <div className="flex justify-center items-center border border-brown w-5/6 h-96 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <div className="flex justify-center items-center flex-col bg-[#FCFCFC] px-5 text-center w-11/12 h-5/6 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <img className="w-auto h-30 mb-4" src={ATH} alt="Logo Vipschool" />
                <a
                    className="transition-all ease-in-out duration-300 hover:underline"
                    target="_blank"
                    href="https://www.figma.com/design/S6qGvkFKEQgyA2VxyuAOH6/Portfolio---Design?node-id=138-1106&t=XwSu3vfSRQqUoHIt-1"
                  >Projets réalisés en alternance</a>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center mt-10 mb-20">
              <div className="flex justify-center items-center border border-brown w-5/6 h-96 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <div className="flex justify-center items-center flex-col bg-[#FCFCFC] px-5 text-center w-11/12 h-5/6 rounded-full md:rounded-[10em] sm:rounded-[5em]">
                <img className="w-auto h-32 mb-4" src={Nessabeauty} alt="Logo Nessabeauty" />

                  <a
                    className="transition-all ease-in-out duration-300 hover:underline"
                    target="_blank"
                    href="https://nessa-beauty.fr/"
                  >Site vitrine d’une esthéticienne</a>
                </div>
              </div>
            </section>
          </Carousel>
        </section>
      </section>
    </>
  );
}

export default Parcours;
