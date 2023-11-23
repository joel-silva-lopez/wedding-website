import "./FormularioConfirmacion.css";
import { PasesInfo } from "./PasesInfo";
import { SeleccionNombres } from "./SeleccionNombres";
import { ConfirmacionNombres } from "./ConfirmacionNombres";
import { IngresarNumeroCelular } from "./IngresarNumeroCelular";
import { useState } from "react";

export const FormularioConfirmacion = ({
  setConfirmacionInfo,
  confirmacionInfo,
  sendConfirmacionInfo
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
    setConfirmacionInfo({ ...confirmacionInfo, telefono });
  };

  if (fase === 5) {
    sendConfirmacionInfo()
  }

  return (
    <div
      id="formulario"
      className={`${animate ? "transicion-formulario" : ""}`}
    >
      {fase === 1 && (
        <PasesInfo
          numeroDePases={nombres?.length || 0}
          iniciarConfirmacion={avanzarFase}
        />
      )}
      {fase === 2 && (
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
      )}
      {fase === 3 && (
        <ConfirmacionNombres
          nombresSeleccionados={nombresSeleccionados}
          confirmarFase={avanzarFase}
          retrocederFase={retrocederFase}
        />
      )}
      {fase === 4 && (
        <IngresarNumeroCelular
          setTelefono={setTelefono}
          avanzarFase={avanzarFase}
          retrocederFase={retrocederFase}
        />
      )}
      {fase === 5 && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};
