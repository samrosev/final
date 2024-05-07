import { useState, useEffect } from "react";
import {Link, useNavigate } from 'react-router-dom';
import React from "react";
import axios from 'axios'

function VolunteerForm() {
  //const[id,setId] = useState()
  const[firstName,setFirstName] = useState()
  const[lastName,setLastName] = useState()
  const[email,setEmail] = useState()
  const[phone,setPhone] = useState()
  const[address,setAddress] = useState()
  const[city,setCity] = useState()
  const[state,setState] = useState()
  const[zip,setZip] = useState()
  const[age,setAge] = useState()

  const Submit = (e) => {
    e.preventDefault();
    console.log(firstName,lastName,email,phone,address,city,state,zip,age);
    axios.post("http://localhost:8082/addVol", {firstName,lastName,email,phone,address,city,state,zip,age})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch(err => console.log(err))
        .then(data => {
            console.log(data);
            alert("Item added successfully!");
        })
        .catch(error => {
            console.error('Error adding item:', error);
            alert('Error adding product:'+error.message); // Display alert if there's an error
        });
}


  // Handle form submission logic
  return (
    <div>
     <Link to="/" className="btn btn-dark">Home</Link>
    <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
      <form onSubmit={Submit}>
      <h2>Volunteer With Us!</h2>
      <div className="mb-2">
          <label htmlFor="">First</label>
          <input type="text" placeholder="First Name" className="form-control"
          onChange={(e => setFirstName(e.target.value))}required/>
      </div>
      <div className="mb-2">
        <label htmlFor="">Last</label>
        <input type="text" placeholder="Last Name" className="form-control"
        onChange={(e => setLastName(e.target.value))}required/>
      </div>
      <div className="mb-2">
        <label htmlFor="">Email</label>
         <input type="email" placeholder="Email" className="form-control"
         onChange={(e => setEmail(e.target.value))}required/>
     </div>
   <div className="mb-2">
       <label htmlFor="">Phone</label>
        <input type="tel" placeholder="Phone" className="form-control"
         pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        onChange={(e => setPhone(e.target.value))}required/>
   </div>
   <div className="mb-2">
      <label htmlFor="">Address</label>
      <input type="" placeholder="Address" className="form-control"
      onChange={(e => setAddress(e.target.value))}required/>
   </div>
   <div className="mb-2">
      <label htmlFor="">City</label>
      <input type="" placeholder="City" className="form-control"
      onChange={(e => setCity(e.target.value))}required/>
   </div>
   <div className="mb-2">
      <label htmlFor="">State</label>
    </div>
    <select>
      <option value="AL">Alabama (AL)</option>
      <option value="AK">Alaska (AK)</option>
      <option value="AZ">Arizona (AZ)</option>
      <option value="AR">Arkansas (AR)</option>
      <option value="CA">California (CA)</option>
      <option value="CO">Colorado (CO)</option>
      <option value="CT">Connecticut (CT)</option>
      <option value="DE">Delaware (DE)</option>
      <option value="DC">District Of Columbia (DC)</option>
      <option value="FL">Florida (FL)</option>
      <option value="GA">Georgia (GA)</option>
      <option value="HI">Hawaii (HI)</option>
      <option value="ID">Idaho (ID)</option>
      <option value="IL">Illinois (IL)</option>
      <option value="IN">Indiana (IN)</option>
      <option value="IA">Iowa (IA)</option>
      <option value="KS">Kansas (KS)</option>
      <option value="KY">Kentucky (KY)</option>
      <option value="LA">Louisiana (LA)</option>
      <option value="ME">Maine (ME)</option>
      <option value="MD">Maryland (MD)</option>
      <option value="MA">Massachusetts (MA)</option>
      <option value="MI">Michigan (MI)</option>
      <option value="MN">Minnesota (MN)</option>
      <option value="MS">Mississippi (MS)</option>
      <option value="MO">Missouri (MO)</option>
      <option value="MT">Montana (MT)</option>
      <option value="NE">Nebraska (NE)</option>
      <option value="NV">Nevada (NV)</option>
      <option value="NH">New Hampshire (NH)</option>
      <option value="NJ">New Jersey (NJ)</option>
      <option value="NM">New Mexico (NM)</option>
      <option value="NY">New York (NY)</option>
      <option value="NC">North Carolina (NC)</option>
      <option value="ND">North Dakota (ND)</option>
      <option value="OH">Ohio (OH)</option>
      <option value="OK">Oklahoma (OK)</option>
      <option value="OR">Oregon (OR)</option>
      <option value="PA">Pennsylvania (PA)</option>
      <option value="RI">Rhode Island (RI)</option>
      <option value="SC">South Carolina (SC)</option>
      <option value="SD">South Dakota (SD)</option>
      <option value="TN">Tennessee (TN)</option>
      <option value="TX">Texas (TX)</option>
      <option value="UT">Utah (UT)</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
      onChange={(e => setState(e.target.option))}required/
    </select>              
    <div className="mb-2">
      <label htmlFor="">Zip</label>
      <input type="number" placeholder="Zip Code" className="form-control" 
      pattern="[0-9]{6}"
      onChange={(e => setZip(e.target.value))}required/>
    </div>
    <div className="mb-2">
      <label htmlFor="">Age</label>
      <input type="number" placeholder="Age" className="form-control"
      onChange={(e => setAge(e.target.value))}required/>
    </div>
    <button className="btn btn-dark">Submit</button>
    </form>
  </div>
  </div>
  );
}

export default VolunteerForm;