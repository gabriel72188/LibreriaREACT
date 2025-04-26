import express from 'express';
import mariadb from 'mariadb';
import cors from 'cors';  // Habilitar CORS
const app = express();
const port = 3000;

// Middleware para manejar solicitudes JSON
app.use(express.json());
app.use(cors()); // Habilitar CORS para permitir solicitudes desde el frontend

// Configuración del pool de conexiones a MariaDB
const pool = mariadb.createPool({
  host: 'localhost',
  port: 3310,
  user: 'libreria',
  password: 'pswlibreria',
  database: 'libreriaBD',
  connectionLimit: 5,
});

// Ruta para la página principal
app.get('/', (req, res) => {
  res.send('Api libreria');
});

// Ruta para obtener los datos de los libros con autor y categoría
app.get('/api/libros', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`
      SELECT 
        libros.id,
        libros.titulo,
        autores.nombre AS autor,
        categorias.nombre AS categoria,
        libros.precio,
        libros.url_imagen
      FROM libros
      JOIN autores ON libros.id_autor = autores.id
      JOIN categorias ON libros.id_categoria = categorias.id
    `);

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No se encontraron libros' });
    }

    res.json(rows);  // Devolver los resultados como JSON
  } catch (err) {
    console.error('Error al ejecutar la consulta', err);
    res.status(500).json({ success: false, message: 'Error al obtener los libros', details: err });
  } finally {
    if (conn) conn.end();
  }
});

// Ruta para obtener todos los usuarios
// Cambiar la ruta de GET a POST para la autenticación de login
app.post('/api/login', async (req, res) => {
    let conn;
  
    try {
      conn = await pool.getConnection();
      
      // Obtener los datos de usuario y contraseña desde el cuerpo de la solicitud
      const { nombre, password } = req.body;
  
      // Realiza la consulta para verificar las credenciales del usuario
      const rows = await conn.query('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [nombre, password]);
  
      if (rows.length === 0) {
        return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
      }
  
      // Si se encuentra el usuario, devuelve su rol
      const user = rows[0]; // Obtener el primer usuario encontrado
      res.json({ success: true, rol: user.rol });
    } catch (err) {
      console.error('Error al intentar iniciar sesión:', err);
      res.status(500).json({ success: false, message: 'Hubo un problema con la autenticación', details: err });
    } finally {
      if (conn) conn.end();
    }
  });
  

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
