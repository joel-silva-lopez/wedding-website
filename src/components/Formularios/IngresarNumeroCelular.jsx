import { useState } from "react";

export const IngresarNumeroCelular = ({
  setTelefono,
  avanzarFase,
  retrocederFase,
}) => {
  const [numeroCelular, setNumeroCelular] = useState("");

  const handleIngresarNumero = () => {
    setTelefono(numeroCelular);
    avanzarFase();
  };

  return (
    <>
      <span className="texto-formulario">Numero de celular para enviar pase:</span>
      <input
        type="text"
        placeholder="Número de celular"
        value={numeroCelular}
        onChange={(e) => setNumeroCelular(e.target.value)}
      />
      <button className="btn primary" onClick={handleIngresarNumero}>Enviar</button>
      <button className="btn" onClick={retrocederFase}>Regresar</button>
    </>
  );
};
