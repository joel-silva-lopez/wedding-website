import { useState } from "react";
import { Cronometro } from "./Cronometro";
import "./Portada.css";
export function Portada() {
  const titulo = "joel & dayana";

  return (
    <>
      <div className="container-portada">
        <img
          className="imagen-principal"
          src="https://picsum.photos/1000/1000"
          alt="Imagen principal"
        />
        <div className="texto">
          {/* <h1>{titulo.toUpperCase()}</h1> */}
          <img src="/Joel_y_Dayana.png" alt="" />
          <h2>10 | 02 | 2024</h2>
          <Cronometro targetDate={new Date("2024-02-10 19:00:00")}></Cronometro>
        </div>
      </div>
    </>
  );
}
