import React, { useState } from 'react';

function AdoptionForm({ catName, catAge }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to submit form data
    console.log(formData);
  };

  return (
    <div className="adoption-form">
      <h2>Adoption Application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
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
      <p>You are applying to adopt {catName}, who is {catAge} years old.</p>
    </div>
  );
}

export default AdoptionForm;
