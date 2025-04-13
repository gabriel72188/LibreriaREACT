import { Index } from '../pages/Index';
import { Store } from '../pages/store';
import { Login } from '../pages/login';
import { Products } from '../pages/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products />} />
    </Routes>
</BrowserRouter>  )
}

