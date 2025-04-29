import { Routes, Route } from 'react-router-dom';
import { Index } from '../pages/Index';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { Store } from '../pages/store';
import  Login  from "../pages/Login";
import AdminPage from '../pages/AdminPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas generales con Header y Footer */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/store" element={<Store />} />

      {/* Ruta del Login sin Header ni Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};
