import Header from "./components/Header.jsx"
import Presentation from "./components/Presentation.jsx";
import Parcours from "./components/Parcours.jsx";
import Competences from "./components/Competences.jsx";
import Parcours1 from './assets/parcours1.png'
import Parcours2 from './assets/parcours2.png'
import Parcours3 from './assets/parcours3.png'

function App() {

  return (
      <>
        <Header />
        <Presentation />
        <section className="flex sm:flex-col flex-wrap items-center justify-center gap-x-32 my-24 mx-10">
          <div className="flex justify-center items-center">
            <img className="w-56 md:w-48" src={Parcours1} alt="Forme abstrait" />
            <div className="z-10 text-center absolute">
              <p className="text-2xl w-56">Bac Technologique STI2D</p>
              <p className="py-2">Réalisations de projets </p>
              <p>septembre 2019 - juin 2020</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-56 md:w-48" src={Parcours2} alt="Forme abstrait" />
            <div className="z-10 text-center absolute">
              <p className="text-2xl w-56">Developper Le Frontend D’une Application Web</p>
              <p className="py-2">Titre Profesionnel</p>
              <p>octobre 2020 - décembre 2020</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-56 md:w-48" src={Parcours3} alt="Forme abstrait" />
            <div className="z-10 text-center absolute">
              <p className="text-2xl w-56">Developpeur Web Openclassroom</p>
              <p className="py-2">Réalisations De Projets</p>
              <p>mars 2021 - juin 2022</p>
            </div>
          </div>
        </section>
        <Competences />
        <Parcours />
        <div className='flex justify-center mb-9 '>
          <a className='bg-[#EAD6C9] px-8 py-2 rounded-2xl border border-brown hover:duration-300 hover:bg-[#EAD6C9]/70' type="button" href="https://contact.nvc-portfolio.fr/">
          <button >Pour me contacter</button></a></div>
      </>
  );
}

export default App;
