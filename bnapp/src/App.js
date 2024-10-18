import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Star from './components/Star';
import Pokemon from './components/Pokemon';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Router>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              Botnoi
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link 
                  className="text-white hover:text-gray-300 transition duration-200"
                  to="/star"
                >
                  Star
                </Link>
              </li>
              <li>
                <Link 
                  className="text-white hover:text-gray-300 transition duration-200"
                  to="/pokemon"
                >
                  Pokemon
                </Link>
              </li>
              <li>
                <Link 
                  className="text-white hover:text-gray-300 transition duration-200"
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
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
