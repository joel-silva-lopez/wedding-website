import { useEffect, useState } from "react";
import "./FormularioConfirmacion.css";
import { PasesInfo } from "./PasesInfo";
import { SeleccionNombres } from "./SeleccionNombres";
import { ConfirmacionNombres } from "./ConfirmacionNombres";
import { IngresarNumeroCelular } from "./IngresarNumeroCelular";

export const FormularioConfirmacion = ({
  setConfirmacionInfo,
  confirmacionInfo,
  sendConfirmacionInfo,
}) => {
  const { fase, nombres, nombresSeleccionados } = confirmacionInfo;
  const [animate, setAnimate] = useState(false);

  const avanzarFase = () => {
    setAnimate(true);
    setTimeout(() => {
      setConfirmacionInfo((prev) => ({ ...prev, fase: fase + 1 }));
      setAnimate(false);
    }, 1500);
  };

  const retrocederFase = () => {
    setAnimate(true);
    setTimeout(() => {
      setConfirmacionInfo((prev) => ({ ...prev, fase: fase - 1 }));
      setAnimate(false);
    }, 1500);
  };

  const setTelefono = (telefono) => {
    setConfirmacionInfo((prev) => ({ ...prev, telefono }));
  };

  useEffect(() => {
    if (fase === 4 && nombresSeleccionados.length === 0) {
      avanzarFase(); // Cambia automáticamente a la fase 5 si no hay nombres seleccionados
    } else if (fase === 5) {
      sendConfirmacionInfo(); // Envía la información cuando se alcanza la fase 5
    }
  }, [fase]);

  const phaseComponents = {
    1: (
      <PasesInfo
        numeroDePases={nombres?.length || 0}
        iniciarConfirmacion={avanzarFase}
      />
    ),
    2: (
      <SeleccionNombres
        nombres={nombres}
        nombresSeleccionados={nombresSeleccionados}
        setNombresSeleccionados={(nombres) =>
          setConfirmacionInfo((prev) => ({
            ...prev,
            nombresSeleccionados: nombres,
          }))
        }
        avanzarFase={avanzarFase}
      />
    ),
    3: (
      <ConfirmacionNombres
        nombresSeleccionados={nombresSeleccionados}
        confirmarFase={avanzarFase}
        retrocederFase={retrocederFase}
      />
    ),
    4: (
      <IngresarNumeroCelular
        setTelefono={setTelefono}
        avanzarFase={avanzarFase}
        retrocederFase={retrocederFase}
      />
    ),
    5: (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ),
  };

  return (
    <div id="formulario" className={animate ? "transicion-formulario" : ""}>
      {phaseComponents[fase]}
    </div>
  );
};
