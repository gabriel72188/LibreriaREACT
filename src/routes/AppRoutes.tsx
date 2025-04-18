import { Routes, Route } from 'react-router-dom';
import { Index } from '../pages/Index';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { Store } from '../pages/store';
import { Login } from '../pages/Login';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/store" element={<Store />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
