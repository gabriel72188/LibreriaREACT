import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css';

// Definir el tipo de respuesta esperada
interface LoginResponse {
  success: boolean;
  rol: string;
}

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post<LoginResponse>('http://localhost:3000/api/login', { nombre, password });

      // Verificar si el login fue exitoso
      if (response.data.success) {
        if (response.data.rol === 'admin') {
          navigate('/admin');
        } else {
          setError('No tienes permisos de administrador.');
        }
      } else {
        setError('Usuario o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      setError('Hubo un problema con la autenticación.');
    }
  };

  return (
    <div className="d-flex min-vh-100">
      <div className="sidenav d-flex align-items-center justify-content-center">
        <div className="login-main-text text-center">
          <h2>Librería<br />Más cuento que Calleja</h2>
          
        </div>
      </div>
      <div className="main d-flex align-items-center justify-content-center">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <p>Login</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Usuario</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre de Usuario"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-danger">{error}</p>} {/* Mostrar error si hay */}
              <button type="submit" className="btn btn-black btn-block">
                Acceder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
