import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Navbar() {
  const navigate = useNavigate();

  const [, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const parameter = e.target.elements.search.value;
    navigate("/search/" + parameter);
  };

  let locationUser = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  };

  useEffect(() => {
    locationUser();
  }, []);
  return (
    <div className="navbar-main">
      <nav className="nav-header">
        <ul className="ul-nav-header">
          <li className=" logoH-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1650866521/AMAZONAS_rscnk3.png"
                alt="logo"
                className="logo-amazonas-header"
              ></img>
            </Link>
          </li>
          <li className="locationH-container">
            <div className="div-ubicacion-nav">
              <p>Hola</p>
              <p className="hover:cursor-pointer" onClick={locationUser}>
              <img
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1650866231/mapa_lbptw1.png"
                alt=""
                className="ubicacion-amazonas-header"
              ></img>              
                Elije tu ubicación
              </p>
            </div>
          </li>
          <li className="searchHcontainer">
            <div className="li-search-nav-header searchProduct">
              <select className="select-search-nav categoryH " defaultValue="">
                <option value="categoria">Todos los departamentos</option>
              </select>
              <form className="" onSubmit={handleSubmit}>
                <input
                  className="inputProduct "
                  name="search"
                  type="text"
                  placeholder="Ingresa el nombre del producto"
                  required
                />
                <button className="buttonSearch" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </li>
          <li className="userHcontainer">
            <div className="div-select-identificate">
              <p> Hola, Identifícate</p>
              <select className="select-identificate-nav" defaultValue="">
                <option value="">Cuenta y Listas</option>
                <option value="mi cuenta">Mi cuenta</option>
                <option value="lista de deseos">Mi lista de deseos</option>
                <option value="pedidos">Mis pedidos</option>
                <option value="ayuda">Ayuda</option>
              </select>
            </div>
          </li>
          <li className="pedidosHcontainer">
            <div className="div-pedidosHcontainer">
              <p>Devoluciones y pedidos</p>
              <select className="select-pedidos-nav" defaultValue="">
                <option value="devoluciones">Devoluciones</option>
                <option value="mis pedidos">Mis pedidos</option>
                <option value="ayuda">Ayuda</option>
              </select>
            </div>
          </li>
          <li className="cartHcontainer">
            <p
              className="hover:cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <img
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1650866122/carro-de-la-carretilla_cdxmaf.png"
                alt="logo"
                className="carrito-header"
              ></img>
              Carrito
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;