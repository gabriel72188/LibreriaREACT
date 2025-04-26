import { Link } from 'react-router-dom';

export const Index = () => {
  return (
    <main className="container mt-5 contenido">
      <section className="page-section clearfix">
        <div className="container">
          <div className="intro">
            <img
              className="intro-img img-fluid mb-3 mb-lg-0 rounded"
              src="/img/intro.jpg"
              alt="..."
            />
            <div className="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Libros que Inspiran</span>
                <span className="section-heading-lower">Historias para Cada Momento</span>
              </h2>
              <p className="mb-3">
                Cada libro en nuestra colección ha sido cuidadosamente seleccionado, con historias que despiertan la imaginación y conocimientos que enriquecen el alma. Una vez que los descubras, nuestros libros se convertirán en una parte esencial de tu rutina diaria. ¡Te lo garantizamos!!
              </p>
              <div className="intro-button mx-auto">
                <Link className="btn btn-primary btn-xl" to="/store">
                  ¡Ve nuestro horario!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Nuestro Compromiso</span>
                  <span className="section-heading-lower">Contigo</span>
                </h2>
                <p className="mb-0">
                  Cada vez que entres en nuestra librería, nos dedicamos a brindarte una atención amable, un ambiente acogedor y, sobre todo, una cuidada selección de libros de la más alta calidad. Si algo no cumple con tus expectativas, háznoslo saber y haremos todo lo posible para solucionarlo. ¡Tu satisfacción es nuestra prioridad!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
