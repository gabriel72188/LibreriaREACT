export const Header = () => {
  return (
    <header>
    <h1 className="site-heading text-center text-faded d-none d-lg-block">
        <span className="site-heading-upper text-primary mb-3">Librería</span>
        <span className="site-heading-lower">Más cuento que Calleja</span>
    </h1>
    
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
            <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Librería</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="/">Inicio</a></li>
                    <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="/about">Sobre</a></li>
                    <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="/products">Libros</a></li>
                    <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="/store">Horario</a></li>
                    <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="/login">Admin</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}
