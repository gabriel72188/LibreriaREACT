import { useEffect, useState } from 'react';
import axios from 'axios';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  precio: string;
  url_imagen: string;
}

const AdminLibros = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [nuevoLibro, setNuevoLibro] = useState<Libro>({
    id: 0,
    titulo: '',
    autor: '',
    categoria: '',
    precio: '',
    url_imagen: '',
  });

  useEffect(() => {
    axios.get<Libro[]>('http://localhost:3000/api/libros')
      .then(res => setLibros(res.data))
      .catch(err => console.error('Error al cargar libros:', err));
  }, []);

  const insertarLibro = async () => {
    try {
      const response = await axios.post<Libro>('http://localhost:3000/api/libros', nuevoLibro); 
      setLibros([...libros, response.data]);
      alert('Libro insertado');
    } catch (err) {
      console.error('Error al insertar libro:', err);
      alert('Hubo un problema al insertar el libro');
    }
  };

  const eliminarLibro = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/libros/${id}`);
      setLibros(libros.filter(libro => libro.id !== id));
      alert('Libro eliminado');
    } catch (err) {
      console.error('Error al eliminar libro:', err);
      alert('Hubo un problema al eliminar el libro');
    }
  };

  const editarLibro = async (id: number) => {
    try {
      const libro = libros.find(libro => libro.id === id);
      if (libro) {
        setNuevoLibro(libro);
      }
    } catch (err) {
      console.error('Error al editar libro:', err);
      alert('Hubo un problema al editar el libro');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Libros</h2>

      {/* Formulario de inserción de libro */}
      <div className="mb-3">
        <h4>Agregar nuevo libro</h4>
        <form>
          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              className="form-control"
              value={nuevoLibro.titulo}
              onChange={(e) => setNuevoLibro({ ...nuevoLibro, titulo: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Autor</label>
            <input
              type="text"
              className="form-control"
              value={nuevoLibro.autor}
              onChange={(e) => setNuevoLibro({ ...nuevoLibro, autor: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Categoría</label>
            <input
              type="text"
              className="form-control"
              value={nuevoLibro.categoria}
              onChange={(e) => setNuevoLibro({ ...nuevoLibro, categoria: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input
              type="text"
              className="form-control"
              value={nuevoLibro.precio}
              onChange={(e) => setNuevoLibro({ ...nuevoLibro, precio: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>URL Imagen</label>
            <input
              type="text"
              className="form-control"
              value={nuevoLibro.url_imagen}
              onChange={(e) => setNuevoLibro({ ...nuevoLibro, url_imagen: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={insertarLibro}
          >
            Agregar libro
          </button>
        </form>
      </div>

      {/* Tabla de libros */}
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map(libro => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.categoria}</td>
              <td>{libro.precio} €</td>
              <td><img src={`/${libro.url_imagen}`} alt="portada" width="60" /></td>
              <td>
                <button 
                  className="btn btn-warning btn-sm"
                  onClick={() => editarLibro(libro.id)}
                >
                  Editar
                </button>
                <button 
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => eliminarLibro(libro.id)}
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

export default AdminLibros;
