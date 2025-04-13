import { Index } from '../pages/Index';
import { Store } from '../pages/store';
import { Login } from '../pages/Login';
import { Products } from '../pages/Products';
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

