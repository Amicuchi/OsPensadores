import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pensadores from './pages/Pensadores';
import Animais from './pages/Animais';
import SobreAutor from './pages/SobreAutor';
import SobreApp from './pages/SobreApp';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensadores" element={<Pensadores />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/sobre-autor" element={<SobreAutor />} />
        <Route path="/sobre-app" element={<SobreApp />} />
      </Routes>
    </Router>
  );
}

export default App;
