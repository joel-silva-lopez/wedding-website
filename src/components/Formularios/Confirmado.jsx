export const Confirmado = ({ invitadosSeleccionados }) => {
  return (
    <div id="confirmado">
      {invitadosSeleccionados.length ? (
        <>
          <span className="texto-formulario">
            Se confirmó la asistencia de:
          </span>
          <div className="marco-formulario">
            {invitadosSeleccionados.map(({nombre}) => (
              <li key={nombre} className="texto-formulario nombres dorado">
                <label>{nombre}</label>
              </li>
            ))}
          </div>
        </>
      ) : (
        <>
          <span className="texto-formulario">
            No selecciono ningun nombre cuando se confirmo el formulario, se
            cancelaron todas las invitaciones
          </span>
        </>
      )}
      <span className="texto-formulario" style={{ marginTop: "70px" }}>
        ¿Tiene problemas en su confirmación?
      </span>
      <span className="texto-formulario">
        Comuniquese con atencion a clientes
      </span>
      <a className="atencion-clientes" href="">
        Enviar mensaje
      </a>
    </div>
  );
};
