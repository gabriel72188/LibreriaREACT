import { useEffect, useState } from 'react';
import axios from 'axios';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  direccion: string;
  telefono: string;
  rol: string;
}

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const cargarUsuarios = () => {
    axios.get<Usuario[]>('http://localhost:3000/api/usuarios')
      .then(res => setUsuarios(res.data))
      .catch(err => console.error('Error al cargar usuarios:', err));
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const eliminarUsuario = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
      setUsuarios(prev => prev.filter(usuario => usuario.id !== id));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Usuarios</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.direccion}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.rol}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarUsuario(usuario.id)}
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

export default AdminUsuarios;
