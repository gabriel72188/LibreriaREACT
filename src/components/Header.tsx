export const Header = () => {
  return (
    <header className="menu bg-black">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler d-lg-none text-white border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img
              src="/src/images/tres.png"
              alt="menu"
              style={{
                width: '30px',
                height: '30px',
                objectFit: 'cover',
              }}
            />
          </button>

          <a className="navbar-brand d-none d-lg-block text-white" href="/"> <b>Gabriel</b></a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-white" href="/index" title="Inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/habilidades" title="Sobre mí">Sobre mí</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/proyectos" title="Proyectos">Proyectos</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/contacto" title="Contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
