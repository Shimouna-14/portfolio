import Presentation from "./components/Presentation.jsx";
import Parcours from "./components/Parcours.jsx";
import Competences from "./components/Competences.jsx";
import Contact from "./components/Contact.jsx";
import { Chevron } from "./assets/chevron";
import { useState } from "react";

function App() {
  const [Right, setRight] = useState(false);
  const goToRight = () => {
    setRight(!Right);
  };

  const [bottom, setBottom] = useState(false);
  const goToBottom = () => {
    setBottom(!bottom);
  };

  const [left, setLeft] = useState(false);
  const goToLeft = () => {
    setLeft(!left);
  };

  const [top, setTop] = useState(false);
  const goToTop = () => {
    setTop(!Top);
  };

  return (
    <>
      <div>
        {/* Presentation */}
        <div
          className={`h-screen w-screen absolute duration-700
          ${Right ? "-translate-x-full" : "translate-x-0"} 
          ${bottom ? "-translate-y-full" : "translate-y-0"}`}
        >
          <Presentation />
          {/* Right Chevron */}
          <span onClick={goToRight} className="absolute rotate-180 top-2/4 end-2 ease-in-out duration-300 hover:end-0 cursor-pointer">
            <Chevron />
          </span>
        </div>

        {/* Parcours */}
        <div
          className={`h-screen w-screen absolute duration-700 
            ${Right ? "translate-x-0" : "translate-x-full"} 
            ${bottom ? "-translate-y-full" : "translate-y-0"}
            `}
        >
          <Parcours />
          {/* Down Chevron */}
          <span onClick={goToBottom} className="absolute -rotate-90 -bottom-5 inset-x-2/4 duration-300 ease-in-out hover:-bottom-7 cursor-pointer">
            <Chevron />
          </span>
        </div>
      </div>

      {/* Competences */}
      <div>
        <div
          className={`h-screen w-screen absolute duration-700
          ${bottom ? "translate-y-0" : "translate-y-full"}
          ${left ? "translate-x-full" : "translate-x-0"}
        `}
        >
          <Competences />
          {/* Right Chevron */}
          <span
            onClick={goToLeft}
            className="absolute -rotate top-2/4 start-2 ease-in-out duration-300 hover:start-0 cursor-pointer"
          >
            <Chevron />
          </span>
        </div>

        {/* Contact */}
        <div className={`h-screen w-screen absolute duration-700 -translate-x-full
          ${left ? "translate-x-0" : ""}
        `}>
          <Contact />
            {/* Up Chevron */}
          <span className='absolute rotate-90 top-28 sm:top-24 ease-in-out duration-300 hover:top-[104px] cursor-pointer'><Chevron /></span>
          <div className='absolute top-[10.5em] sm:top-[9.5em] border-t border-black w-full'></div>
          <div className='absolute top-0 border-r border-black h-full w-16 bg-white z-[4]'></div>

        </div>
      </div>
    </>
  );
}

export default App;
