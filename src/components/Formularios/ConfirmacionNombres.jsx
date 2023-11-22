export const ConfirmacionNombres = ({
  nombresSeleccionados,
  confirmarFase,
  retrocederFase,
}) => (
  <>
    <h2 className="texto-formulario">Lista de Nombres Seleccionados:</h2>
    <div className="marco-formulario">
      {nombresSeleccionados.map((nombre) => (
        <li key={nombre} className="texto-formulario nombres dorado">
          <label>{nombre}</label>
        </li>
      ))}
    </div>
    <button className="btn primary" onClick={confirmarFase}>
      Confirmar
    </button>
    <button className="btn" onClick={retrocederFase}>
      Regresar
    </button>
  </>
);
