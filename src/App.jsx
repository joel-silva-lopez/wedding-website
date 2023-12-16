import { useState, useEffect } from "react";
import "./App.css";
import { Contenedor } from "./Contenedor";
import { Musica } from "./components/Reproductor/Musica";

const ToolTip = ({ showTooltip }) => {
  return (
    <>
      <div className={`tooltip ${showTooltip ? "visible" : ""}`}>
      <img className="" src="/flecha.png" alt="" />

        Presiona aqui
      </div>
    </>
  );
};

function App() {
  const handleDragStart = (event) => {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  };

  const [bienvenida, setBienvenida] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!showTooltip) setShowTooltip(true);
    }, 3000);
  }, []);

  return (
    <div onDragStart={handleDragStart}>
      {bienvenida ? (
        <div className="container-logo">
          <img
            src="/JD_logo.png"
            className="logo-carga"
            onClick={() => {
              setBienvenida(!bienvenida);
            }}
          ></img>
          {<ToolTip showTooltip={showTooltip} />}
        </div>
      ) : (
        <div className="container-general">
          <Musica />
          <Contenedor></Contenedor>
        </div>
      )}
    </div>
  );

  /* 
  3:30
  630
  7
  8
  1130
  
  */
}

export default App;
