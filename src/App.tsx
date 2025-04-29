import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdminHeader } from './components/AdminHeader';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

function App() {
  const location = useLocation();

  const hideLayoutRoutes = ['/login', '/admin', '/admin/autores', '/admin/categorias', '/admin/libros', '/admin/usuarios'];
  const isAdminPage = location.pathname.startsWith('/admin');

  useEffect(() => {
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    const bootstrapJS = document.createElement('script');
    bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    bootstrapJS.defer = true;
    document.body.appendChild(bootstrapJS);
  }, []);

  return (
    <div className="container-full flex flex-col min-h-screen">
      {!hideLayoutRoutes.includes(location.pathname) && <Header />}
      {isAdminPage && <AdminHeader />}

      <main className="container flex-1 mt-4">
        <AppRoutes />
      </main>

      {!hideLayoutRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;

