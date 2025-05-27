// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import tools from './pages/tools';
import join from './pages/join';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
