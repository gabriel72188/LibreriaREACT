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

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await axios.get<Libro[]>('http://localhost:3000/api/libros');
        console.log('Datos recibidos:', response.data);
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
                  <a href="#" className="btn btn-primary">Ver detalles</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>  
    </main>
  );
};
