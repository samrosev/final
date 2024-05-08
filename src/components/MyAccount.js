import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"; 


function MyAccount() {
  const [volunteers, setVolunteers] = useState([]);
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get('http://localhost:8082/getVols');
        setVolunteers(response.data);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    const fetchAdoptions = async () => {
      try {
        const response = await axios.get('http://localhost:8082/getAdoptapp');
        setAdoptions(response.data);
      } catch (error) {
        console.error('Error fetching adoptions:', error);
      }
    };

    fetchVolunteers();
    fetchAdoptions();
  }, []);

  const handleDeleteVolunteer = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/deleteVol/${id}`);
      setVolunteers(volunteers.filter(volunteer => volunteer.phone !== id));
      alert('Volunteer form deleted successfully!');
    } catch (error) {
      console.error('Error deleting volunteer form:', error);
    }
  };

  const handleDeleteAdoption = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/deleteApp/${id}`);
      setAdoptions(adoptions.filter(adoption => adoption.phone !== id));
      alert('Adoption form deleted successfully!');
    } catch (error) {
      console.error('Error deleting adoption form:', error);
    }
  };

  return (
    <div className="my-account">
      <h2>My Account</h2>
      <h3>Volunteer Forms</h3>
      <ul>
        {volunteers.map(volunteer => (
          <li key={volunteer._id}>
            {volunteer.firstName} {volunteer.lastName}  
            <button className="btn btn-danger" onClick={() => handleDeleteVolunteer(volunteer.phone)}> Delete</button>
          </li>
        ))}
      </ul>
      <h3>Adoption Forms</h3>
      <ul>
        {adoptions.map(adoption => (
          <li key={adoption._id}>
            {adoption.firstName} {adoption.lastName}
            <button className="btn btn-dark" onClick={() => handleDeleteAdoption(adoption.phone)}> Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MyAccount;
