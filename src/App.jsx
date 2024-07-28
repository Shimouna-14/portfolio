import Header from "./components/Header.jsx"
import Presentation from "./components/Presentation.jsx";
import Parcours from "./components/Parcours.jsx";
import Competences from "./components/Competences.jsx";
import Contact from "./components/Contact.jsx";
import { useState, useEffect } from "react";

function App() {

  return (
      <>
        <Header />
        <Presentation />
        {/* <Contact /> */}
      </>
  );
}

export default App;
