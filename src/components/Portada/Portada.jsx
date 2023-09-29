import { Cronometro } from './Cronometro';
import './Portada.css'
export function Portada() {
  const titulo = "joel & dayana";
  return (
    <>
      <div className='container'>
        <img className="imagen-principal" src="https://picsum.photos/1000/1000" alt="Imagen principal" />
        <div className='texto'><h1>{titulo.toUpperCase()}</h1>
          <h2>10 Febrero 2024</h2>
          <Cronometro></Cronometro>
        </div>
      </div>
    </>
  );
}
