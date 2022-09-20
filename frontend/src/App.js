import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Patients from './Components/Patients';
import Studies from './Components/Studies';
import Home from './Components/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          </ul>

          <hr />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/patients" element={<Patients/>} />
            <Route path="/studies" element={<Studies/>} />
          </Routes>
        </div>
      </Router>
    </div>
    </QueryClientProvider>
  );
}

export default App;
