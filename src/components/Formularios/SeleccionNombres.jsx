export const SeleccionNombres = ({
  nombres,
  nombresSeleccionados,
  setNombresSeleccionados,
  avanzarFase,
}) => {
  const handleCheckboxChange = (nombre) => {
    if (nombresSeleccionados.includes(nombre)) {
      // Si el nombre ya está seleccionado, quitarlo del arreglo
      setNombresSeleccionados(
        nombresSeleccionados.filter(
          (selectedNombre) => selectedNombre !== nombre
        )
      );
    } else {
      // Si el nombre no está seleccionado, agregarlo al arreglo
      setNombresSeleccionados([...nombresSeleccionados, nombre]);
    }
  };

  return (
    <>
      <p className="texto-formulario">
        Selecciona la casilla a lado del nombre de aquellos invitados que desees
        confirmar. Los invitados con casillas sin seleccionar se cancelarán en
        automático.
      </p>
      <ul>
        {nombres.map((nombre) => (
          <li key={nombre} className={`texto-formulario nombres ${nombresSeleccionados.includes(nombre) ? 'dorado':''}`}>
            <label >
              <input
                type="checkbox"
                checked={nombresSeleccionados.includes(nombre)}
                onChange={() => handleCheckboxChange(nombre)}
              />
              {nombre}
            </label>
          </li>
        ))}
      </ul>
      <button className="btn primary" onClick={avanzarFase}>Avanzar</button>
    </>
  );
};
