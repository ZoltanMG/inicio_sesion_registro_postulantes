import Particulas from "../particulas/Paticulas";
import astronautaLuna from '../../assets/images/82.png'
import astronautaCohete from '../../assets/images/84.png'
import logo from '../../assets/images/logo-somos-fondo-oscuro.png'
import singIn from '../../assets/images/singIn.PNG'
import './iniciosesion.css'

function InicioSesion() {
  return (
    <div>
      <img id="astronauta--cohete" src={astronautaCohete} alt="astronauta sobre cohete" />
      <div id="contenedor--boton__imagenes">
        <div id="contenedor--btn">
          <a href="https://www.devco.com.co/" target="_blank" rel="noreferrer"><img id="logo" src={logo} alt="logo somos devco" /></a>
          <div id="btn">
          <h1>Iniciar sesión</h1>
            <img src={singIn} alt="sing in with google" />
          </div>
        </div>
        <div id="astronauta--luna">
          <img src={astronautaLuna} alt="astronauta sobre luna" />
        </div>

      </div>
      <div id="fondo">
        <Particulas />
      </div>
    </div>
  );
}

export default InicioSesion;