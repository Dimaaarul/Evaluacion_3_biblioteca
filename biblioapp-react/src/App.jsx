import { libros } from './data/libros';
import ListaLibros from './components/ListaLibros';
<h1>Hola</h1>
return (
<ListaLibros libros={libros} />);

function App() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Biblioteca</h1>
      <ListaLibros libros={libros} />
    </main>
  );
}

export default App;