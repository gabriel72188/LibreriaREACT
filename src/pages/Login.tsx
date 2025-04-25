import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css';

const Login = () => {
  return (
    <div className="d-flex min-vh-100">
      <div className="sidenav d-flex align-items-center justify-content-center">
        <div className="login-main-text text-center">
          <h2>Librería<br />Más cuento que Calleja</h2>
          <p>Login</p>
        </div>
      </div>
      <div className="main d-flex align-items-center justify-content-center">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Usuario</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre de Usuario"
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
                  required
                />
              </div>
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
