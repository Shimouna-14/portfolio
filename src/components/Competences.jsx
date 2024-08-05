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
      <section className="flex justify-center mb-24">
        <section className="p-5 w-5/6 sm:w-11/12 overflow-x-scroll scroller flex gap-9 sm:gap-10 items-center sm:mt-9 text-xl lg:text-2xl">
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
