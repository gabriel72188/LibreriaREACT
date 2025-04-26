import express from 'express';
import mariadb from 'mariadb';
import cors from 'cors';  // Habilitar CORS
const app = express();
const port = 3000;

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors());

// Configuración del pool de conexiones a MariaDB
const pool = mariadb.createPool({
  host: 'localhost',               // Nombre del servicio en Docker Compose
  port: 3310,                      // Puerto de la base de datos en tu Docker
  user: 'libreria',                // Usuario de la base de datos
  password: 'pswlibreria',         // Contraseña del usuario
  database: 'libreriaBD',          // Nombre de la base de datos
  connectionLimit: 5               // Número máximo de conexiones
});

// Ruta para la página principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de la librería!');
});

// Ruta para obtener los datos de los libros
app.get('/api/libros', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM libros"); // Cambia según tu estructura de tabla
    res.json(rows);  // Devolver los resultados como JSON
  } catch (err) {
    res.status(500).json({ error: "Error al ejecutar la consulta", details: err });
  } finally {
    if (conn) conn.end();
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
