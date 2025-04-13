import { Index } from '../pages/Index';
import { Contacto } from '../pages/Contacto';
import { Habilidades } from '../pages/Habilidades';
import { Proyectos } from '../pages/Proyectos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/habilidades" element={<Habilidades/>} />
        <Route path="/proyectos" element={<Proyectos />} />
    </Routes>
</BrowserRouter>  )
}

