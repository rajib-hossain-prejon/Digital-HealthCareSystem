import React from 'react';

const AppointmentsByDate = ({appointments}) => {
  console.log(appointments);
    return (
        <div>
           <h2 className='alert alert-secondary'> Total Appointments: {appointments.length}</h2>
        
        <table className='table table-success table-striped table-hover'>
        <thead>
    <tr>
  
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Doctor</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
        {
               appointments.map(app => <tbody><tr className='table-info' key={app._id}><td>{app.name}</td><td>{app.age}</td><td>{app.gender}</td><td>{app.service}</td><td>{app.phone}</td></tr></tbody>)
           }
        </table>
        </div>
    );
};

export default AppointmentsByDate;