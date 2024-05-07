import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CatDetails from './components/CatDetails';
import AdoptionForm from './components/AdoptionForm';
import VolunteerForm from './components/VolunteerForm';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats/:id" element={<CatDetails />} />
          <Route path="/adopt" element={<AdoptionForm />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
