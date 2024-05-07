import React from 'react';
import "bootstrap/dist/css/bootstrap.css"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import CatDetails from './pages/CatDetails';
import AdoptionForm from './pages/AdoptionForm';
import VolunteerForm from './pages/VolunteerForm';
import './styles.css';

const App = () => {
  return (
    <div className="App">
    <Router>
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cats/:id' element={<CatDetails />} />
          <Route path='/adopt' element={<AdoptionForm />} />
          <Route path='/volunteer' element={<VolunteerForm />} />
        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
