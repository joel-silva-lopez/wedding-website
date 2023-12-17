import './Error404.css'
export const Error404 = () => {
    return (
        <div className="error-container">
            <h1>Error 404: Página no encontrada</h1>
            <p>La invitacion que estás buscando no existe.</p>
            <p>Por favor comunicate con atencion a clientes si crees que es un error.</p>
            <a href="">
                Enviar mensaje
            </a>
        </div>
    );
};