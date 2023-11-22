import "./Contenedor.css";
import { FormularioConfirmacion } from "./components/Formularios/FormularioConfirmacion";
import { Cronometro } from "./components/Portada/Cronometro";
import { Historia } from "./components/Saludos/Historia";
import { useEffect, useState, useRef } from "react";

export const Contenedor = () => {
  return (
    <>
      <div className="container">
        <div className="background-image"></div>

        <div className="main-container">
          <img src="/portada.png" alt="Imagen de portada" />

          <div id="bienvenida">
            <img src="/bienvenida.png" alt="Bienvenida" />
            <Cronometro targetDate={new Date("2024-02-10 19:00:00")} />
          </div>

          <Saludos />

          <Historia imagen="/foto-juntos.png" />

          <img src="/poema-el.png" alt="Poema de parte de el" />

          <Salones />

          <img src="/itinerario.png" alt="Itinerario" />

          <Formulario />

          <img src="/fotos-novios.png" alt="Fotos de los novios" />

          <div id="footer">
            <h2>GRACIAS POR ASISTIR ❤</h2>
            <img id="logo-footer" src="/JD_logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

const Formulario = () => {
  const [confirmacionInfo, setConfirmacionInfo] = useState({
    fase: 1,
    nombres: ["Joel", "Dayana"],
    nombresSeleccionados: [],
    telefono: "",
  });

  return (
    <div className="contenedor-formulario">
      <img src="/formulario.png" alt="Bienvenida" />
      <FormularioConfirmacion
        setConfirmacionInfo={setConfirmacionInfo}
        confirmacionInfo={confirmacionInfo}
      />
    </div>
  );
};

const Saludos = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [visible, setVisible] = useState(false);
  const saludo = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(saludo.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting && !visible) {
      saludo.current.querySelectorAll("span").forEach((element) => {
        element.classList.add("visible");
      });
      setVisible(true);
    }
  }, [isIntersecting]);

  return (
    <div className="contenedor-imagen" ref={saludo}>
      <img src="/invitado.png" alt="Saludos a Invitado" />
      <div>
        <span className="texto-invitado titulo-invitado">Fam. Silva Lopez</span>
        <span className="texto-invitado saludo-invitado">
          Nos encantaria verlos en esta noche especial
        </span>
      </div>
    </div>
  );
};

const Salones = () => {
  return (
    <div className="contenedor-salones">
      <img src="/salones.png" alt="Localizacion de Salones de eventos" />
      <a
        href="https://maps.app.goo.gl/yqSpVif9kiDVh1EFA"
        target="_blank"
        className="direccion"
        id="salon1"
      >
        ¿CÓMO LLEGAR?
      </a>
      <a
        href="https://maps.app.goo.gl/rK1vutkuJr1v8PtV9"
        target="_blank"
        className="direccion"
        id="salon2"
      >
        ¿CÓMO LLEGAR?
      </a>
    </div>
  );
};
