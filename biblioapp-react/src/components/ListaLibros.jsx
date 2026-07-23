import PropTypes from 'prop-types';
import LibroCard from './LibroCard';

const ListaLibros = ({ libros }) => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {libros.map((libro) => (
        <LibroCard
          key={libro.id}
          titulo={libro.titulo}
          editorial={libro.editorial}
          anio={libro.anio}
          estado={libro.estado}
          resumen={libro.resumen}
          autores={libro.autores}
          esNovedad={libro.esNovedad}
        />
      ))}
    </section>
  );
};

ListaLibros.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      titulo: PropTypes.string.isRequired,
      editorial: PropTypes.string.isRequired,
      anio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      estado: PropTypes.oneOf(['Disponible', 'Prestado', 'Reservado']).isRequired,
      resumen: PropTypes.string.isRequired,
      autores: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]),
      esNovedad: PropTypes.bool
    })
  ).isRequired
};

ListaLibros.defaultProps = {
  libros: []
};

export default ListaLibros;