import Header from "./Header.jsx";
import { Database } from "../assets/database";
import { Figma } from "../assets/figma";
import { Illustrator } from "../assets/illustrator";
import { Nodejs } from "../assets/node-js";
import { Photoshop } from "../assets/photoshop";
import { React } from "../assets/react";
import { Tailwind } from "../assets/tailwind";
import { Wordpress } from "../assets/wordpress";

function Competences() {
  return (
    <>
      <Header titre="Compétences" />
      <section className="h-full flex flex-col sm:flex-row justify-center sm:justify-around items-center mt-16 text-xl lg:text-2xl">
        <section className="w-4/5 sm:w-auto h-36 sm:h-3/5 flex sm:flex-col justify-around">
          <div className="w-36 h-full sm:h-auto flex flex-col justify-center items-center sm:mb-5">
            <span className="h-full ease-in-out duration-300 hover:scale-125">
              <Photoshop />
            </span>
            <p className="mt-5 sm:mt-3 ">Photoshop</p>
          </div>
          <div className="w-36 h-full sm:h-auto flex flex-col justify-center items-center sm:mb-5">
            <span className="h-full ease-in-out duration-300 hover:scale-125">
              <React />
            </span>
            <p className="mt-5 sm:mt-3">React</p>
          </div>
          <div className="w-36 h-full sm:h-auto flex flex-col justify-center items-center sm:mb-5">
            <span className="h-full ease-in-out duration-300 hover:scale-125">
              <Nodejs />
            </span>
            <p className="mt-5 sm:mt-3">NodeJS</p>
          </div>
          <div className="w-36 h-full sm:h-auto flex flex-col justify-center items-center sm:mb-5">
            <span className="h-full ease-in-out duration-300 hover:scale-125">
              <Tailwind />
            </span>
            <p className="mt-5 sm:mt-3">Tailwind</p>
          </div>
        </section>
        <section className="w-4/5 sm:w-auto h-36 sm:h-3/5 flex sm:flex-col justify-around mt-20 sm:mt-0">
          <div className="w-36 h-full sm:h-auto flex flex-col justify-center items-center sm:mb-5">
            <span className="h-full ease-in-out duration-300 hover:scale-125">
              <Figma />
            </span>
            <p className="mt-5 sm:mt-3">Figma</p>
          </div>
          <div className="w-36 h-full sm:h-auto flex flex-col justify-center items-center sm:mb-5">
            <span className="h-full ease-in-out duration-300 hover:scale-125">
              <Database />
            </span>
            <p className="mt-5 sm:mt-3">MySQL</p>
          </div>
          <div className="w-36 h-full sm:h-auto flex flex-col justify-center items-center sm:mb-5">
            <span className="h-full ease-in-out duration-300 hover:scale-125">
              <Wordpress />
            </span>
            <p className="mt-5 sm:mt-3">Wordpress</p>
          </div>
          <div className="w-36 h-full sm:h-auto flex flex-col justify-center items-center sm:mb-5">
            <span className="h-full ease-in-out duration-300 hover:scale-125">
              <Illustrator />
            </span>
            <p className="mt-5 sm:mt-3">Illustrator</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Competences;
