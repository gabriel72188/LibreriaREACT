// pages/admin/Categorias.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Categoria {
  id: number;
  nombre: string;
}

const AdminCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [nuevaCategoria, setNuevaCategoria] = useState<Categoria>({ id: 0, nombre: '' });

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = () => {
    axios
      .get<Categoria[]>('http://localhost:3000/api/categorias')
      .then(res => setCategorias(res.data))
      .catch(err => console.error('Error al cargar categorías:', err));
  };

  const insertarCategoria = async () => {
    try {
      const response = await axios.post<Categoria>('http://localhost:3000/api/categorias', {
        nombre: nuevaCategoria.nombre,
      });
      setCategorias([...categorias, response.data]);
      setNuevaCategoria({ id: 0, nombre: '' });
      alert('Categoría insertada correctamente');
    } catch (err) {
      console.error('Error al insertar categoría:', err);
      alert('Hubo un problema al insertar la categoría');
    }
  };

  const eliminarCategoria = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/categorias/${id}`);
      setCategorias(categorias.filter(categoria => categoria.id !== id));
      alert('Categoría eliminada');
    } catch (err) {
      console.error('Error al eliminar categoría:', err);
      alert('Hubo un problema al eliminar la categoría');
    }
  };

  const editarCategoria = (categoria: Categoria) => {
    setNuevaCategoria(categoria);
  };

  const actualizarCategoria = async () => {
    try {
      await axios.put<Categoria>(`http://localhost:3000/api/categorias/${nuevaCategoria.id}`, {
        nombre: nuevaCategoria.nombre,
      });
      cargarCategorias();
      setNuevaCategoria({ id: 0, nombre: '' });
      alert('Categoría actualizada correctamente');
    } catch (err) {
      console.error('Error al actualizar categoría:', err);
      alert('Hubo un problema al actualizar la categoría');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Categorías</h2>

      {/* Formulario para agregar o editar categoría */}
      <div className="mb-3">
        <h4>{nuevaCategoria.id === 0 ? 'Agregar nueva categoría' : 'Editar categoría'}</h4>
        <form>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nuevaCategoria.nombre}
              onChange={(e) => setNuevaCategoria({ ...nuevaCategoria, nombre: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={nuevaCategoria.id === 0 ? insertarCategoria : actualizarCategoria}
          >
            {nuevaCategoria.id === 0 ? 'Agregar categoría' : 'Actualizar categoría'}
          </button>
        </form>
      </div>

      {/* Tabla de categorías */}
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => editarCategoria(categoria)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => eliminarCategoria(categoria.id)}
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

export default AdminCategorias;
