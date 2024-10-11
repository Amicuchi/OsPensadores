import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pensadores from './pages/Pensadores';
import Animais from './pages/Animais';
import SobreApp from './pages/SobreApp';
import Contato from './pages/Contato';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensadores" element={<Pensadores />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/sobre-app" element={<SobreApp />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
