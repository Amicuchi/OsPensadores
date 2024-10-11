import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Pensadores e os Animais</h1>
      <div className="buttons-container">
        <Link to="/pensadores">
          <button className="big-button">Conheça os Pensadores</button>
        </Link>
        <Link to="/animais">
          <button className="big-button">Conheça os Animais</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
