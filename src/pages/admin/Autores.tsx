// pages/admin/Autores.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
  fecha_nacimiento: string;
}

const AdminAutores = () => {
  const [autores, setAutores] = useState<Autor[]>([]);
  const [nuevoAutor, setNuevoAutor] = useState<Autor>({
    id: 0,
    nombre: '',
    nacionalidad: '',
    fecha_nacimiento: '',
  });

  useEffect(() => {
    cargarAutores();
  }, []);

  const cargarAutores = async () => {
    try {
      const res = await axios.get<Autor[]>('http://localhost:3000/api/autores');
      setAutores(res.data);
    } catch (err) {
      console.error('Error al cargar autores:', err);
    }
  };

  const insertarAutor = async () => {
    try {
      const response = await axios.post<Autor>('http://localhost:3000/api/autores', nuevoAutor);
      setAutores([...autores, response.data]);
      alert('Autor insertado');
    } catch (err) {
      console.error('Error al insertar autor:', err);
      alert('Hubo un problema al insertar el autor');
    }
  };

  const eliminarAutor = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/autores/${id}`);
      setAutores(autores.filter(autor => autor.id !== id));
      alert('Autor eliminado');
    } catch (err) {
      console.error('Error al eliminar autor:', err);
      alert('Hubo un problema al eliminar el autor');
    }
  };

  const editarAutor = async (id: number) => {
    const autor = autores.find(a => a.id === id);
    if (autor) {
      setNuevoAutor(autor);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Autores</h2>

      {/* Formulario para agregar/editar autor */}
      <div className="mb-3">
        <h4>Agregar / Editar autor</h4>
        <form>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nuevoAutor.nombre}
              onChange={(e) => setNuevoAutor({ ...nuevoAutor, nombre: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Nacionalidad</label>
            <input
              type="text"
              className="form-control"
              value={nuevoAutor.nacionalidad}
              onChange={(e) => setNuevoAutor({ ...nuevoAutor, nacionalidad: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Fecha de nacimiento</label>
            <input
              type="date"
              className="form-control"
              value={nuevoAutor.fecha_nacimiento}
              onChange={(e) => setNuevoAutor({ ...nuevoAutor, fecha_nacimiento: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={insertarAutor}
          >
            Guardar autor
          </button>
        </form>
      </div>

      {/* Tabla de autores */}
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Nacionalidad</th>
            <th>Fecha de nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autores.map(autor => (
            <tr key={autor.id}>
              <td>{autor.nombre}</td>
              <td>{autor.nacionalidad}</td>
              <td>{autor.fecha_nacimiento}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => editarAutor(autor.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => eliminarAutor(autor.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAutores;
