import express from 'express';
import mariadb from 'mariadb';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const pool = mariadb.createPool({
  host: 'localhost',
  port: 3310,
  user: 'libreria',
  password: 'pswlibreria',
  database: 'libreriaBD',
  connectionLimit: 5,
});

app.get('/', (req, res) => {
  res.send('Api libreria');
});
app.delete('/api/autores/:id', async (req, res) => {
  const { id } = req.params;
  let conn;

  try {
    conn = await pool.getConnection();

    const result = await conn.query('DELETE FROM autores WHERE id = ?', [id]);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Autor eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Autor no encontrado' });
    }
  } catch (err) {
    console.error('Error al eliminar autor:', err);
    res.status(500).json({ message: 'Error en el servidor', details: err });
  } finally {
    if (conn) conn.end();
  }
});
app.delete('/api/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  let conn;

  try {
    conn = await pool.getConnection();

    const result = await conn.query('DELETE FROM usuarios WHERE id = ?', [id]);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    console.error('Error al eliminar usuario', err);
    res.status(500).json({ message: 'Error al eliminar el usuario', details: err });
  } finally {
    if (conn) conn.end();
  }
});

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

    res.json(rows);
  } catch (err) {
    console.error('Error al obtener libros:', err);
    res.status(500).json({ success: false, message: 'Error al obtener los libros', details: err });
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
      
      const { nombre, password } = req.body;
  
      const rows = await conn.query('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [nombre, password]);
  
      if (rows.length === 0) {
        return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
      }
  
      const user = rows[0];
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
