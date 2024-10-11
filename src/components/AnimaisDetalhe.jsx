import PropTypes from 'prop-types';

function AnimaisDetalhe({ animal, onProximo, onVoltar }) {
  return (
    <div className="animal-detalhe">
      <h2>{animal.name}</h2>
      {animal.picture && <img src={animal.picture} alt={`Foto de ${animal.name}`} />}
      
      <h3>Curiosidades</h3>
      <ul>
        {animal.curiosity.map((curiosity, index) => (
          <li key={index}>{curiosity}</li>
        ))}
      </ul>

      <div className="navegacao">
        <button onClick={onVoltar}>Voltar</button>
        <button onClick={onProximo}>Próximo</button>
      </div>
    </div>
  );
}
export default AnimaisDetalhe;

AnimaisDetalhe.propTypes = {
  animal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string,
    curiosity: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onProximo: PropTypes.func.isRequired,
  onVoltar: PropTypes.func.isRequired,
};