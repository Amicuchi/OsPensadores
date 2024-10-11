import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre-autor">Sobre o Autor</Link></li>
        <li><Link to="/sobre-app">Sobre o App</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
