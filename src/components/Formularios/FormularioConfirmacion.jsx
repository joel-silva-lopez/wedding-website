import './FormularioConfirmacion.css'
import { PasesInfo } from "./PasesInfo";
import { SeleccionNombres } from "./SeleccionNombres";
import { ConfirmacionNombres } from "./ConfirmacionNombres";
import { IngresarNumeroCelular } from "./IngresarNumeroCelular";

export const FormularioConfirmacion = ({
  setConfirmacionInfo,
  confirmacionInfo,
}) => {

  const { fase, nombres, nombresSeleccionados } = confirmacionInfo;

  const avanzarFase = () => {
    setConfirmacionInfo((prev) => ({ ...prev, fase: fase + 1 }));
  };

  const retrocederFase = () => {
    setConfirmacionInfo((prev) => ({ ...prev, fase: fase - 1 }));
  };

  const setTelefono = (telefono) => {
    setConfirmacionInfo({ ...confirmacionInfo, telefono });
  };


  return (
    <div id="formulario">
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
    </div>
  );
};
