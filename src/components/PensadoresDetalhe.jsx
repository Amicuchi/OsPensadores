import PropTypes from 'prop-types';

function PensadoresDetalhe({ pensador, onProximo, onVoltar }) {
  return (
    <div className="content detalhe">
      <div className="card">
        <h2>{pensador.name}</h2>
        <h3>({pensador.birth} - {pensador.death})</h3>
        {pensador.picture && <img src={pensador.picture} alt={`Foto de ${pensador.name}`} />}
        <p>{pensador.citation}</p>
        <hr />
        <p>{pensador.text}</p>
      </div>
      <div className="navegacao">
        <button onClick={onVoltar}>Voltar</button>
        <button onClick={onProximo}>Próximo</button>
      </div>

    </div>
  );
}
export default PensadoresDetalhe;

PensadoresDetalhe.propTypes = {
  pensador: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    birth: PropTypes.string,
    death: PropTypes.string,
    citation: PropTypes.string,
    picture: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  onProximo: PropTypes.func.isRequired,
  onVoltar: PropTypes.func.isRequired,
};