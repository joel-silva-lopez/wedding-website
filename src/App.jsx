import { useState, useEffect } from "react";
import "./App.css";
import { Contenedor } from "./Contenedor";
import { Musica } from "./components/Reproductor/Musica";
import { apiwedding } from "./hooks/WeddingHook";
import { Error404 } from "./components/Errores/Error404";

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
  const [familyId, setFamilyId] = useState('')
  const [confirmacionInfo, setConfirmacionInfo] = useState({
    "_id": "6577c542a86b223485c26d54",
    "titulo": "Fam. Prueba Prueba",
    "saludo": "Hola prueba 2",
    "celular": 6672246490,
    "celularConfirmado": 6672246490,
    "invitados": [
        {
            "_id": "657d3b4fa86b223485c26d63",
            "nombre": "Amelia"
        }
    ]
  });

  useEffect(() => {
    setTimeout(() => {
      if (!showTooltip) setShowTooltip(true);
    }, 3000);

    const url = window.location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);
    console.log('ID:', id);

    setFamilyId(id)

    apiwedding.obtenerFamiliaInfo(id).then((result) => {
      if (!result.ok) {
        setFamilyId('')
        throw new Error(`Error al obtener información de la familia - Código: ${result.status}`);
      } else {
        result.json().then(json => {
          setConfirmacionInfo(json)
        });        
      }
    }).catch((error) => {
      console.error("Error al obtener datos del backend:", error);
    })


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
          {familyId ? (<>{/* <Musica /> */}
            <Contenedor Contenedor confirmacionInfo={confirmacionInfo} setConfirmacionInfo={setConfirmacionInfo}></Contenedor></>) : (<Error404 />)}

        </div>
      )
      }
    </div >
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
