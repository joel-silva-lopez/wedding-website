import { useState, useEffect } from "react";
import "./App.css";
import { Contenedor } from "./Contenedor";
import { apiwedding } from "./hooks/WeddingHook";
import { Error404 } from "./components/Errores/Error404";

function App() {
  const handleDragStart = (event) => {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  };

  const [bienvenida, setBienvenida] = useState(true);
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
      if (bienvenida) setBienvenida(!bienvenida);
    }, 3000);

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

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
        </div>
      ) : (
        <div className="container-general">
          {familyId ? (<>
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
