import PropTypes from 'prop-types';

const FiltroEstado = ({ estadoSeleccionado, onCambiarEstado }) => {
  const opciones = [
    { label: 'Todos', valor: 'Todos' },
    { label: 'Disponibles', valor: 'Disponible' },
    { label: 'Prestados', valor: 'Prestado' },
    { label: 'Reservado', valor: 'Reservado' }
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
      {opciones.map((opcion) => {
        const activo = estadoSeleccionado === opcion.valor;

        return (
          <button
            key={opcion.valor}
            type="button"
            onClick={() => onCambiarEstado(opcion.valor)}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: activo ? '1px solid #0d6efd' : '1px solid #ccc',
              backgroundColor: activo ? '#0d6efd' : '#fff',
              color: activo ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: activo ? '700' : '500'
            }}
          >
            {opcion.label}
          </button>
        );
      })}
    </div>
  );
};

FiltroEstado.propTypes = {
  estadoSeleccionado: PropTypes.oneOf(['Todos', 'Disponible', 'Prestado', 'Reservado']).isRequired,
  onCambiarEstado: PropTypes.func.isRequired
};

FiltroEstado.defaultProps = {
  estadoSeleccionado: 'Todos'
};

export default FiltroEstado;