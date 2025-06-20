import { NavLink, useNavigate } from 'react-router-dom';

export const AdminHeader = () => {
  const navigate = useNavigate();

  const handleSalir = () => {
    navigate('/');
  };

  return (
    <header className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
      <h4 className="m-0">Panel de Administración</h4>
      <nav>
        <NavLink to="/admin/autores" className="text-white me-3">Autores</NavLink>
        <NavLink to="/admin/categorias" className="text-white me-3">Categorías</NavLink>
        <NavLink to="/admin/libros" className="text-white me-3">Libros</NavLink>
        <NavLink to="/admin/usuarios" className="text-white me-3">Usuarios</NavLink>
        <button className="btn btn-outline-light btn-sm" onClick={handleSalir}>
          Salir
        </button>
      </nav>
    </header>
  );
};


