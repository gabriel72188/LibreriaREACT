export const Proyectos = () => {
  return <main className="container mt-5 contenido">
  <section className="row">
    {/* Proyectos */}
    <h2 className="text-center mt-5 text-white">
      Proyectos
    </h2>
    <table className="mt-5 ">
      <thead className="table-warning text-center">
        <tr>
          <td>
            <img
              src="/src/images/Pruebaimg.jpg"
              className="img-fluid rounded"
              width="300"
              height="300"
            />
            <h3 className="text-white mt-3">Proyecto1</h3>
            <p className="text-white mt-3"> Descripcion del proyecto1</p>
          </td>
          <td>
            <img
              src="/src/images/Pruebaimg.jpg"
              className="img-fluid rounded"
              width="300"
              height="300"
            />
            <h3 className="text-white mt-3">Proyecto2</h3>
            <p className="text-white mt-3"> Descripcion del proyecto2</p>
          </td>
          <td>
            <img
              src="/src/images/Pruebaimg.jpg"
              className="img-fluid rounded"
              width="300"
              height="300"
            />
            <h3 className="text-white mt-3">Proyecto3</h3>
            <p className="text-white mt-3"> Descripcion del proyecto3</p>
          </td>
        </tr>
      </thead>
    </table>
  </section>
</main>;
};