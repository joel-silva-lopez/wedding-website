import { useState, useEffect } from "react";
import "./App.css";
import { Contenedor } from "./Contenedor";
import { FormularioConfirmacion } from "./components/Formularios/FormularioConfirmacion";

function App() {
  const handleDragStart = (event) => {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  };

  const [bienvenida, setBienvenida] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (bienvenida) setBienvenida(!bienvenida);
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
        </div>
      ) : (
        <div className="container-general">
          <Contenedor></Contenedor>
        </div>
      )}
    </div>
  );

}


export default App;
