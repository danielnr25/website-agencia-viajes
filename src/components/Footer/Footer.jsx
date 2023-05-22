import { Link } from "react-router-dom"
import './Footer.css'

const Footer = () => {
   return (
      <div className="footer">
         <div className="top">
            <div>
               <h1>Vudera</h1>
               <p>Elige tu destino favorito</p>
            </div>
            <div>
               <Link to='https://github.com/danielnr25' target="_blank">
                  <i className="fa-brands fa-facebook-square"></i>
               </Link>
               <Link to='https://github.com/danielnr25' target="_blank">
                  <i className="fa-brands fa-twitter-square"></i>
               </Link>
               <Link to='https://github.com/danielnr25' target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
               </Link>
               <Link to='https://github.com/danielnr25' target="_blank">
                  <i className="fa-brands fa-github-square"></i>
               </Link>
            </div>
         </div>
         <div className="bottom">
            <div>
               <h2>Proyectos</h2>
               <Link to="/about">Regitros</Link>
               <Link to="/service">Estados</Link>
               <Link to="/contact">Licencias</Link>
               <Link to="/contact">Más Versiones</Link>
            </div>
            <div>
               <h2>Comunidad</h2>
               <Link to="/about">Github</Link>
               <Link to="/service">Discord</Link>
               <Link to="/contact">Asuntos</Link>
               <Link to="/contact">Facebook</Link>
            </div>
            <div>
               <h2>Ayuda</h2>
               <Link to="/about">Soporte</Link>
               <Link to="/service">Nosotros</Link>
               <Link to="/contact">Contacto</Link>
            </div>
            <div>
               <h2>Otros</h2>
               <Link to="/about">Terminos y Condiciones</Link>
               <Link to="/service">Politicas de Privacidad</Link>
               <Link to="/contact">Licencia</Link>
            </div>
         </div>
      </div>
   )
}

export default Footer