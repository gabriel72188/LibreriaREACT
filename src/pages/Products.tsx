import { useEffect, useState } from 'react';
import axios from 'axios';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  precio: string;
  url_imagen: string;
}

export const Products = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [filteredLibros, setFilteredLibros] = useState<Libro[]>([]);
  const [search, setSearch] = useState('');
  const [libroSeleccionado, setLibroSeleccionado] = useState<Libro | null>(null);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await axios.get<Libro[]>('http://localhost:3000/api/libros');
        setLibros(response.data);
        setFilteredLibros(response.data);
      } catch (error) {
        console.error('Error al cargar libros', error);
      }
    };

    fetchLibros();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);

    if (value) {
      const filtered = libros.filter((libro) =>
        libro.categoria.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLibros(filtered);
    } else {
      setFilteredLibros(libros);
    }
  };

  return (
    <main className="container mt-5 contenido">
      <div className="container mt-4">
        <h2 className="text-center">Lista de Libros</h2>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Busca por categoría (ej: terror)"
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        <div className="row">
          {filteredLibros.map((libro) => (
            <div className="col-md-4 mb-4" key={libro.id}>
              <div className="card h-100">
                <img src={`/${libro.url_imagen}`} className="card-img-top" alt="Imagen del libro" />
                <div className="card-body">
                  <h5 className="card-title">{libro.titulo}</h5>
                  <p className="card-text"><strong>Autor:</strong> {libro.autor}</p>
                  <p className="card-text"><strong>Categoría:</strong> {libro.categoria}</p>
                  <p className="card-text"><strong>Precio:</strong> {libro.precio} €</p>
                </div>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => setLibroSeleccionado(libro)}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {libroSeleccionado && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{libroSeleccionado.titulo}</h5>
                <button type="button" className="btn-close" onClick={() => setLibroSeleccionado(null)} />
              </div>
              <div className="modal-body">
                <img
                  src={`/${libroSeleccionado.url_imagen}`}
                  alt="Imagen del libro"
                  className="img-fluid mb-3"
                />
                <p><strong>Autor:</strong> {libroSeleccionado.autor}</p>
                <p><strong>Categoría:</strong> {libroSeleccionado.categoria}</p>
                <p><strong>Precio:</strong> {libroSeleccionado.precio} €</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setLibroSeleccionado(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

