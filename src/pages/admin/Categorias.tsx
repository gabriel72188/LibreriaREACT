// pages/admin/Categorias.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Categoria {
  id: number;
  nombre: string;
}

const AdminCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    axios.get<Categoria[]>('http://localhost:3000/api/categorias')
      .then(res => setCategorias(res.data))
      .catch(err => console.error('Error al cargar categorías:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Categorías</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCategorias;