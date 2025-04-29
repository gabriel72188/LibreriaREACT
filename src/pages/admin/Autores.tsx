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

  useEffect(() => {
    axios.get<Autor[]>('http://localhost:3000/api/autores')
      .then(res => setAutores(res.data))
      .catch(err => console.error('Error al cargar autores:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Autores</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Nacionalidad</th>
            <th>Fecha de nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {autores.map(autor => (
            <tr key={autor.id}>
              <td>{autor.nombre}</td>
              <td>{autor.nacionalidad}</td>
              <td>{autor.fecha_nacimiento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAutores;
