export const Store = () => {
  return (
      <main className="container mt-5 contenido">
      <section className="page-section cta">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <div className="cta-inner bg-faded text-center rounded">
                        <h2 className="section-heading mb-5">
                            <span className="section-heading-upper">Adelante</span>
                            <span className="section-heading-lower">Estamos Abiertos</span>
                        </h2>
                        <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                            <li className="list-unstyled-item list-hours-item d-flex">
                                Domingo
                                <span className="ms-auto">Cerrado</span>
                            </li>
                            <li className="list-unstyled-item list-hours-item d-flex">
                                Lunes
                                <span className="ms-auto">7:00 AM - 8:00 PM</span>
                            </li>
                            <li className="list-unstyled-item list-hours-item d-flex">
                                Martes
                                <span className="ms-auto">7:00 AM - 8:00 PM</span>
                            </li>
                            <li className="list-unstyled-item list-hours-item d-flex">
                                Miércoles
                                <span className="ms-auto">7:00 AM - 8:00 PM</span>
                            </li>
                            <li className="list-unstyled-item list-hours-item d-flex">
                                Jueves
                                <span className="ms-auto">7:00 AM to 8:00 PM</span>
                            </li>
                            <li className="list-unstyled-item list-hours-item d-flex">
                                Viernes
                                <span className="ms-auto">7:00 AM - 8:00 PM</span>
                            </li>
                            <li className="list-unstyled-item list-hours-item d-flex">
                                Sábado
                                <span className="ms-auto">9:00 AM - 5:00 PM</span>
                            </li>
                        </ul>
                        <p className="address mb-5">
                            <em>
                                <strong>Calle Alameda 501</strong>
                                <br />
                                Huércal Overa, Almería
                            </em>
                        </p>
                        <p className="mb-0">
                            <small><em>Llámanos</em></small>
                            <br />
                            (666) 616-1369
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>  );
};