import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Star from './components/Star';
import Pokemon from './components/Pokemon';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Router>
        <nav className='site-nav'>
          <ul className="nav">
            <li><Link className="app-header-item" to="/star">Star</Link></li>
            <li><Link className="app-header-item" to="/pokemon">Pokemon</Link></li>
            <li><Link className="app-header-item" to="/resume">Resume</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/star" element={<Star />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
