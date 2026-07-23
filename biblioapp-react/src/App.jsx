import { useState } from 'react';
import { libros } from './data/libros';
import ListaLibros from './components/ListaLibros';
import FiltroEstado from './components/FiltroEstado';

function App() {
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [estadoFiltro, setEstadoFiltro] = useState('Todos');

  const textoBusquedaNormalizado = textoBusqueda.trim().toLowerCase();

  const librosFiltrados = libros.filter((libro) => {
    const coincideEstado =
      estadoFiltro === 'Todos' || libro.estado === estadoFiltro;

    const autores = Array.isArray(libro.autores)
      ? libro.autores
      : [libro.autores];

    const textoLibro = [
      libro.titulo,
      libro.editorial,
      libro.resumen,
      ...autores
    ]
      .join(' ')
      .toLowerCase();

    const coincideTexto =
      textoBusquedaNormalizado === '' ||
      textoLibro.includes(textoBusquedaNormalizado);

    return coincideEstado && coincideTexto;
  });

  return (
    <main style={{ padding: '20px' }}>
      <h1>Biblioteca</h1>

      <input
        type="text"
        value={textoBusqueda}
        onChange={(e) => setTextoBusqueda(e.target.value)}
        placeholder="Buscar por título, autor o resumen"
        style={{
          padding: '8px 12px',
          marginBottom: '12px',
          width: '100%',
          maxWidth: '400px'
        }}
      />

      <FiltroEstado
        estadoSeleccionado={estadoFiltro}
        onCambiarEstado={setEstadoFiltro}
      />

      <ListaLibros libros={librosFiltrados} />
    </main>
  );
}

export default App;