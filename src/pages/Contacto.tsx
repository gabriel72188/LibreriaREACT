export const Contacto = () => {
  return (
      <main className="container mt-5 contenido">
      <h1 className="text-center text-white"><b>Contacto</b></h1>
      <form className="bg-light p-3 mt-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input type="text" id="nombre" name="nombre" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            className="form-control"
            placeholder="Tu mensaje"
            rows={3}
            name="mensaje"
            id="mensaje"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </main>  );
};