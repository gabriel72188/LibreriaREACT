import { Routes, Route } from 'react-router-dom';
import { Index } from '../pages/Index';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { Store } from '../pages/store';
import Login from '../pages/Login';
import AdminLayout from '../layouts/AdminLayout';
import Autores from '../pages/admin/Autores';
import Categorias from '../pages/admin/Categorias';
import Libros from '../pages/admin/Libros';
import Usuarios from '../pages/admin/Usuarios';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/store" element={<Store />} />
      <Route path="/login" element={<Login />} />

      {/* Rutas admin con layout propio */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="autores" element={<Autores />} />
        <Route path="categorias" element={<Categorias />} />
        <Route path="libros" element={<Libros />} />
        <Route path="usuarios" element={<Usuarios />} />
      </Route>
    </Routes>
  );
};
