import PropTypes from 'prop-types';

const estadoStyles = {
  Disponible: {
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb'
  },
  Prestado: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    border: '1px solid #f5c6cb'
  },
  Reservado: {
    backgroundColor: '#fff3cd',
    color: '#856404',
    border: '1px solid #ffeeba'
  }
};

const LibroCard = ({
  titulo,
  editorial,
  anio,
  estado,
  resumen,
  autores,
  esNovedad
}) => {
  const autoresTexto = Array.isArray(autores) ? autores.join(', ') : autores;
  const estiloEstado = estadoStyles[estado] || {
    backgroundColor: '#e9ecef',
    color: '#495057',
    border: '1px solid #dee2e6'
  };

  return (
    <article
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '360px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        margin: '12px 0'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px'
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{titulo}</h3>
        {esNovedad && (
          <span
            style={{
              backgroundColor: '#ffefcc',
              color: '#8a4b00',
              padding: '4px 8px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: '700'
            }}
          >
            NUEVO
          </span>
        )}
      </div>

      <p style={{ margin: '0 0 8px', color: '#666' }}>{autoresTexto}</p>

      <p style={{ margin: '0 0 8px' }}>
        <strong>Editorial:</strong> {editorial}
      </p>

      <p style={{ margin: '0 0 8px' }}>
        <strong>Año:</strong> {anio}
      </p>

      <p style={{ margin: '0 0 8px' }}>
        <span
          style={{
            ...estiloEstado,
            padding: '4px 8px',
            borderRadius: '999px',
            display: 'inline-block',
            fontWeight: '600'
          }}
        >
          {estado}
        </span>
      </p>

      <p style={{ margin: 0, lineHeight: 1.5 }}>{resumen}</p>
    </article>
  );
};

LibroCard.propTypes = {
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
};

LibroCard.defaultProps = {
  autores: [],
  esNovedad: false
};

export default LibroCard;