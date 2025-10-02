import { useState } from 'react';
import '../static/ComponentesHook.css';
const productos = [
  { id: 1, nombre: 'Laptop', categoria: 'electronica', precio: 999 },
  { id: 2, nombre: 'Smartphone', categoria: 'electronica', precio: 599 },
  { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
];

function Catalogo() {
  const [categoria, setCategoria] = useState('todos');

  const filtrados = categoria === 'todos'
    ? productos
    : productos.filter(p => p.categoria === categoria);

  const cantidad = filtrados.length;

  return (
    <div className="catalogo">
      <h2>Catálogo de Productos</h2>

      <div className="filtros">
        {['todos', 'electronica', 'ropa', 'libros'].map((cat) => (
          <button key={cat} onClick={() => setCategoria(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {categoria !== 'todos' && <p>Filtrando por: <strong>{categoria}</strong></p>}

      <p>
        Hay {cantidad} {cantidad === 1 ? 'producto' : cantidad > 1 ? 'productos' : 'productos'} en esta categoría.
      </p>

      {cantidad === 0 ? (
        <p>No hay productos disponibles en esta categoría.</p>
      ) : (
        <ul>
          {filtrados.map((p) => (
            <li key={p.id}>
              {p.nombre} - ${p.precio}
              {p.precio > 500 && <span className="premium"> ¡Producto premium! </span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Catalogo;
