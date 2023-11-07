import { useState } from "react";
import "./Historia.css";
import JD from "/JD_logo.png";
export const Historia = () => {
  const [desplegado, setDesplegado] = useState(false);

  return (
    <>
      <h1 className="titulo-seccion">Saludos Invitado</h1>
      <div className="container-historia">
        <img
          className="imagen-historia"
          src="https://picsum.photos/1000/1000"
          alt="Imagen Para contar una historia"
        />
        <div className={`historia ${desplegado ? "desplegado" : ""}`}>
          <div
            className={`desplegar-historia ${desplegado ? "desplegado" : ""}`}
            onClick={() => {
              setDesplegado(!desplegado);
            }}
          >
            <img
              id="flecha"
              className={`${desplegado ? "desplegado" : ""}`}
              src="/flecha.png"
            />
          </div>
          <img src={JD} alt="logo" />
          <p>
            En el rincón más especial de nuestras vidas, descubrimos un capítulo
            que nos ha llenado de alegría y amor. A través de los altibajos, los
            desafíos y los momentos de risas compartidas, hemos tejido juntos
            una historia que nos llena de gratitud y felicidad.
          </p>

          <p>
            Vemos cada día como un regalo que desempaquetamos juntos, lleno de
            momentos de complicidad, apoyo y el dulce susurro del amor que nos
            une. Cada amanecer trae consigo nuevas oportunidades para crecer
            como individuos y como pareja, y lo hacemos con alegría en nuestros
            corazones.
          </p>
          <p>
            A ti, querido lector, te extendemos nuestro más cálido
            agradecimiento por ser parte de esta historia. Tu interés nos llena
            de alegría y nos inspira a seguir escribiendo nuevos capítulos de
            felicidad.
          </p>
          <p>Con amor y gratitud,</p>
          <p>Joel y Dayana</p>
        </div>
      </div>
    </>
  );
};
