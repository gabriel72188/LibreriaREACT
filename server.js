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
// Ruta para insertar un libro
// Ruta para obtener todos los libros con autor y categoría
app.post('/api/libros', async (req, res) => {
  const { titulo, autor, categoria, precio, url_imagen } = req.body;

  let conn;
  try {
    conn = await pool.getConnection();

    // Inserta el libro en la base de datos
    const result = await conn.query(
      `INSERT INTO libros (titulo, id_autor, id_categoria, precio, url_imagen)
       VALUES (?, (SELECT id FROM autores WHERE nombre = ?), (SELECT id FROM categorias WHERE nombre = ?), ?, ?)`,
      [titulo, autor, categoria, precio, url_imagen]
    );

    // Verifica si la inserción fue exitosa
    if (result.affectedRows > 0) {
      res.status(201).json({ message: 'Libro insertado correctamente', id: result.insertId });
    } else {
      res.status(400).json({ message: 'No se pudo insertar el libro' });
    }
  } catch (err) {
    console.error('Error al insertar libro', err);
    res.status(500).json({ message: 'Error al insertar el libro', details: err });
  } finally {
    if (conn) conn.end();
  }
});



app.delete('/api/libros/:id', async (req, res) => {
  const { id } = req.params;

  let conn;
  try {
    conn = await pool.getConnection();

    const result = await conn.query('DELETE FROM libros WHERE id = ?', [id]);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Libro eliminado' });
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (err) {
    console.error('Error al eliminar libro', err);
    res.status(500).json({ message: 'Error al eliminar el libro', details: err });
  } finally {
    if (conn) conn.end();
  }
});
app.put('/api/libros/:id', async (req, res) => {
  const { titulo, autor, categoria, precio, url_imagen } = req.body;
  const { id } = req.params;

  let conn;
  try {
    conn = await pool.getConnection();

    const result = await conn.query(
      `UPDATE libros
       SET titulo = ?, id_autor = (SELECT id FROM autores WHERE nombre = ?),
           id_categoria = (SELECT id FROM categorias WHERE nombre = ?),
           precio = ?, url_imagen = ?
       WHERE id = ?`,
      [titulo, autor, categoria, precio, url_imagen, id]
    );

    if (result.affectedRows > 0) {
      res.json({ id, titulo, autor, categoria, precio, url_imagen });
    } else {
      res.status(400).json({ message: 'No se pudo actualizar el libro' });
    }
  } catch (err) {
    console.error('Error al actualizar libro', err);
    res.status(500).json({ message: 'Error al actualizar el libro', details: err });
  } finally {
    if (conn) conn.end();
  }
});


// Ruta para obtener todos los usuarios
app.get('/api/usuarios', async (req, res) => {
  let conn;

  try {
    conn = await pool.getConnection();

    const rows = await conn.query('SELECT * FROM usuarios');

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No se encontraron usuarios' });
    }

    res.json(rows);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).json({ success: false, message: 'Error al obtener los usuarios', details: err });
  } finally {
    if (conn) conn.end();
  }
});

app.get('/api/categorias', async (req, res) => {
  let conn;

  try {
    conn = await pool.getConnection();

    const rows = await conn.query('SELECT * FROM categorias');

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No se encontraron usuarios' });
    }

    res.json(rows);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).json({ success: false, message: 'Error al obtener los usuarios', details: err });
  } finally {
    if (conn) conn.end();
  }
});
app.get('/api/autores', async (req, res) => {
  let conn;

  try {
    conn = await pool.getConnection();

    const rows = await conn.query('SELECT * FROM autores');

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No se encontraron usuarios' });
    }

    res.json(rows);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).json({ success: false, message: 'Error al obtener los usuarios', details: err });
  } finally {
    if (conn) conn.end();
  }
});


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
