import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h1 className="site-heading text-center text-faded d-none d-lg-block">
        <span className="site-heading-upper text-primary mb-3">Librería</span>
        <span className="site-heading-lower">Más cuento que Calleja</span>
      </h1>

      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <Link className="navbar-brand text-uppercase fw-bold d-lg-none" to="/">
            Librería
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}  // Al hacer clic, cambiamos el estado
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}  // Añadimos la clase "show" cuando el menú está abierto
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/about">
                  Sobre
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/products">
                  Libros
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/store">
                  Horario
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/login">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
