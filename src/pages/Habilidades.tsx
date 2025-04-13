export const Habilidades = () => {
  return (
    <main className="container mt-5 contenido">
      <article className="row">
        {/* Sobre mí */}
        <h1 className="text-center mt-4 text-white">
          <b>¿Quién soy?</b>
        </h1>
        <p className="text-center mt-3 text-white">Apasionado por crear sitios web funcionales y atractivos, combinando
          diseño creativo con habilidades
          básicas de desarrollo. Con conocimientos iniciales en HTML, CSS y Java,
          y entusiasmo por aprender nuevas
          tecnologías y frameworks. Enfocado en brindar soluciones modernas que
          mejoren la experiencia del usuario.
        </p>

        {/* Habilidades */}
        <h2 className="text-center mt-5 text-white">
          <b>Habilidades</b>
        </h2>
        <table className="mt-5 ">
          <thead className="table-warning text-center">
            <tr>
              <td>
                <img
                  src="/src/images/htmllogo.png"
                  className="img-fluid"
                  width="100"
                  height="100"
                />
                <p className="text-white"> <b>HTML</b></p>
              </td>
              <td>
                <img
                  src="/src/images/csslogo.png"
                  className="img-fluid"
                  width="100"
                  height="100"
                />
                <p className="text-white"><b>CSS</b></p>
              </td>
              <td>
                <img
                  src="/src/images/javalogo.png"
                  className="img-fluid"
                  width="100"
                  height="100"
                />
                <p className="text-white"><b>Java</b></p>
              </td>
            </tr>
          </thead>
        </table>

        {/* Idiomas */}
        <h2 className="text-center mt-5 text-white">
          <b>Idiomas</b>
        </h2>
        <table className="mt-5 ">
          <thead className="table-warning text-center">
            <tr>
              <td>
                <img
                  src="/src/images/bande.png"
                  className="img-fluid"
                  width="100"
                  height="100"
                />
                <p className="text-white"> <b>Inglés</b></p>
              </td>
              <td>
                <img
                  src="/src/images/banderaEsp.png"
                  className="img-fluid"
                  width="100"
                  height="100"
                />
                <p className="text-white"><b>Español</b></p>
              </td>
            </tr>
          </thead>
        </table>
      </article>
    </main>);
};