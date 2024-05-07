import { useState, useEffect } from "react";
import {Link, useNavigate } from 'react-router-dom';
import React from "react";
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css"; 


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
  const navigate = useNavigate()

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
      <input type="" placeholder="State" className="form-control"
      onChange={(e => setState(e.target.value))}required/>
    </div>

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