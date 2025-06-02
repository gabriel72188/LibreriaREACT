import { useParams } from 'react-router-dom';
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

const DetalleLibro = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState<Libro | null>(null);

  useEffect(() => {
    axios.get<Libro[]>('http://localhost:3000/api/libros')
      .then(res => {
        const libroEncontrado = res.data.find(l => l.id === Number(id));
        setLibro(libroEncontrado || null);
      })
      .catch(err => console.error('Error al cargar libro:', err));
  }, [id]);

  if (!libro) return <div className="text-center mt-5">Cargando libro...</div>;

  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <img src={`/${libro.url_imagen}`} alt={libro.titulo} className="mb-4" style={{ maxHeight: '400px' }} />
      <h2>{libro.titulo}</h2>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Categoría:</strong> {libro.categoria}</p>
      <p><strong>Precio:</strong> {libro.precio} €</p>
    </div>
  );
};

export default DetalleLibro;
