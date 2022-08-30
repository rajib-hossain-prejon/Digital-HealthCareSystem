import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle ={
    backgroundColor: "#F4FDF8",
    height: "100%"
}


const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] =e.target.value;
        setInfo(newInfo);
    }
const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
}

const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);
    formData.append('speciality', info.speciality);
    formData.append('location', info.location);
    formData.append('visitingHour', info.visitingHour);
    formData.append('phone', info.phone);


    fetch('http://localhost:5000/addADoctor', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
}

    return (
        <section>
          <Navbar></Navbar>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5">
            <form onSubmit={handleSubmit}>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword1" name='name' placeholder='Enter Name'/>
  </div>
  <div class="mb-3">
  <div class="mb-3">
    <label for="exampleInputPassword5" class="form-label">Phone</label>
    <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword5" name='phone' placeholder='Enter Phone'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onBlur={handleBlur} type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp"/>
   </div>
    <label for="exampleInputPassword5" class="form-label">Speciality</label>
    <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword5" name='speciality' placeholder='Enter Speciality'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword5" class="form-label">Location</label>
    <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword5" name='location' placeholder='Enter Location'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword5" class="form-label">Visiting Hour</label>
    <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword5" name='visitingHour' placeholder='Enter Visiting Hours'/>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword" class="form-label">Upload a Picture</label>
    <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword" placeholder='Picture'/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
    </section>
    );
};

export default AddDoctor;