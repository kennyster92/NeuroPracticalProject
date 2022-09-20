import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Patients from './Components/Patients';
import Studies from './Components/Studies';
import Home from './Components/Home';
import CountStudies from './Components/CountStudies';
import SearchModality from './Components/SearchModality';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/patients">List of patients</Link>
            </li>
            <li>
              <Link to="/studies">List of studies</Link>
            </li>
            <li>
              <Link to="/count-studies">Count studies in a week</Link>
            </li>
            <li>
              <Link to="/search-modality">Search modality</Link>
            </li>
          </ul>

          <hr />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/studies" element={<Studies/>} />
            <Route path="/count-studies" element={<CountStudies/>} />
            <Route path="/search-modality" element={<SearchModality/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
