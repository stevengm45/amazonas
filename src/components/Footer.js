import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-main">
      <ul className="ul-main-footer">
        <li>
          <ul className="ul-2-footer">
            <li className="li-1">Conócenos</li>
            <li>Trabajar en amazon</li>
            <li>Información corporativa</li>
            <li>Departamento de prensa</li>
          </ul>
        </li>
        <li>
          <ul className="ul-2-footer">
            <li className="li-1">Gana dinero con nosotros</li>
            <li>Vender en amazon</li>
            <li>Vender en amazon Handmade</li>
            <li>Publica tu libro en Kindle</li>
            <li>Programa de afiliados</li>
            <li>Anuncia tus productos</li>
          </ul>
        </li>
        <li>
          <ul className="ul-2-footer">
            <li className="li-1">Podemos ayudarte</li>
            <li>Amazon y COVID-19</li>
            <li>Devolver o reemplazar productos</li>
            <li>Gestionar contenido y dispositivos</li>
            <li>Ayuda</li>
          </ul>
        </li>
        <li>
          <ul className="ul-2-footer">
            <li className="li-1">Métodos de pago</li>
            <li>Tarjetas crédito y débito</li>
            <li>Tarjetas de regalo</li>
            <li>Meses sin intereses</li>
            <li>Amazon Cash</li>
            <li>Amazon Recargable</li>
          </ul>
        </li>
      </ul>
      <div className="logo-footer">
      <Link to="/">
              <img
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1650866521/AMAZONAS_rscnk3.png"
                alt="logo"
                className="logo-amazonas-footer"
              ></img>
            </Link>
      </div>
    </footer>
  );
}

export default Footer;