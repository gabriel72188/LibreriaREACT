// pages/admin/Libros.tsx
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

  useEffect(() => {
    axios.get<Libro[]>('http://localhost:3000/api/libros')
      .then(res => setLibros(res.data))
      .catch(err => console.error('Error al cargar libros:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Libros</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Imagen</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLibros;
