import Presentation from "./components/Presentation.jsx";
import Parcours from "./components/Parcours.jsx";
import Competences from "./components/Competences.jsx";
import Contact from "./components/Contact.jsx";
import { Chevron } from "./assets/chevron";
import { useState, useEffect } from "react";

function App() {
  const [right, setRight] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [left, setLeft] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    if (right && bottom && left && top) {
      setRight(false);
      setBottom(false);
      setLeft(false);
      setTop(false);
    }
  }, [right, bottom, left, top]);

  return (
    <>
      <div>
        {/* Presentation */}
        <div
          className={`h-screen w-screen absolute duration-700
          ${right ? "-translate-x-full" : ""}           
          ${top ? "translate-x-0" : ""}
          `}
        >
          <Presentation />
          {/* Right Chevron */}
          <span
            onClick={() => setRight(!right)}
            className="absolute rotate-180 top-2/4 end-2 ease-in-out duration-300 hover:end-0 cursor-pointer"
          >
            <Chevron />
          </span>
        </div>

        {/* Parcours */}
        <div
          className={`h-screen w-screen absolute duration-700 
            ${right ? "translate-x-0" : "translate-x-full"} 
            ${bottom ? "-translate-y-full" : "translate-y-0"}
            `}
        >
          <Parcours />
          {/* Down Chevron */}
          <span
            onClick={() => setBottom(!bottom)}
            className="absolute -rotate-90 inset-x-2/4 hover duration-300 ease-in-out cursor-pointer lg:-bottom-5 lg:hover:-bottom-7 sm:top-32 m:top-32 sm:hover:top-36 m:hover:top-36 z-[4]"
          >
            <Chevron />
          </span>
        </div>
      </div>

      {/* Competences */}
      <div>
        <div
          className={`h-screen w-screen absolute duration-700
          ${bottom ? "translate-y-0 opacity" : "translate-y-full"}
          ${left ? "translate-x-full" : "translate-x-0"}
        `}
        >
          <Competences />
          {/* Right Chevron */}
          <span
            onClick={() => setLeft(!left)}
            className="absolute -rotate top-2/4 start-2 ease-in-out duration-300 hover:start-0 cursor-pointer"
          >
            <Chevron />
          </span>
        </div>

        {/* Contact */}
        <div
          className={`h-screen w-screen absolute duration-700
          ${left ? "translate-x-0" : "-translate-x-full"}
          ${top ? "translate-y-full" : ""}
        `}
        >
          <Contact />
          {/* Up Chevron */}
          <span
            onClick={() => setTop(!top)}
            className="absolute rotate-90 inset-x-2/4 top-[82px] sm:top-[60px] ease-in-out duration-300 hover:top-[75px] sm:hover:top-[52px] cursor-pointer z-[5]"
          >
            <Chevron />
          </span>
          <div className="absolute top-[10.5em] sm:top-[8.5em] border-t border-black w-full"></div>
          <div className="absolute top-0 border-r border-black h-full w-16 sm:w-12 bg-white z-[4] sm:hidden"></div>
        </div>
      </div>
    </>
  );
}

export default App;
