import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {AppRoutes} from './routes/AppRoutes';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
    <Header></Header>
      <AppRoutes />
    </BrowserRouter>
    <Footer></Footer>
  </StrictMode>
);
