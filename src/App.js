import React from 'react';
import "bootstrap/dist/css/bootstrap.css"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CatDetails from './components/CatDetails';
import AdoptionForm from './components/AdoptionForm';
import VolunteerForm from './components/VolunteerForm';
import MyAccount from './components/MyAccount';

import './styles.css';

const App = () => {
  return (
    <div className="App">
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats/:id" element={<CatDetails />} />
          <Route path="/adopt" element={<AdoptionForm />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
