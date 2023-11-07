import { useState, useEffect } from "react";
import "./App.css";
import { Portada } from "./components/Portada/Portada";
import { Historia } from "./components/Saludos/Historia";
import { Footer } from "./components/Footer/Footer";
import { Itinerario } from "./components/itinerario/Itinerario";

function App() {
  const [bienvenida, setBienvenida] = useState(true);


  useEffect(() => {
    setTimeout( () => {
      if (bienvenida) setBienvenida(!bienvenida);
    }, 3000)
  }, []);

  return (
    <>
      {bienvenida ? (
        <div className="container-logo">
          <img
            src="/JD_logo.png"
            className="logo-carga"
            onClick={() => {
              setBienvenida(!bienvenida);
            }}
          ></img>
        </div>
      ) : (
        <div className="container-general">
          <Portada></Portada>
          <Historia></Historia>
          <Itinerario></Itinerario>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default App;
