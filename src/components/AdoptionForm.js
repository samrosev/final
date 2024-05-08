import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css"; 

function AdoptionForm({ catName, catAge }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    age: '',
    hasPets: false,
    additionalInfo: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:8082/addApp", formData)
      .then(result => {
        console.log(result);
        navigate('/');
        alert("Adoption form submitted successfully!");
      })
      .catch(err => {
        console.error('Error submitting adoption form:', err);
        alert('Error submitting adoption form: ' + err.message);
      });
  };

  return (
    <div className="adoption-form">
      <h2>Adoption Application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="zip">Zip:</label>
          <input type="number" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div>
          <label>
            Do you have any pets currently?
            <input type="checkbox" name="hasPets" checked={formData.hasPets} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdoptionForm;
