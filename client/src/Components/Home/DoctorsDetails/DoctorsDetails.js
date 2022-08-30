import React from 'react';

const DoctorsDetails = ({appointments}) => {

    console.log(appointments);

    return (
    //     <div className='col-md-4 text-center mt-5'>
    //     <img style={{height: '5em'}} src={service.img} alt="" />
    //     <h5 className='my-2'>{service.name}</h5>
    //     <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, repellat.</p>
    // </div>
    <div>
 <h2>Appointments: {appointments.length}</h2>
 {
               appointments.map(app => <li key={app._id}>{app.name}</li>)
           }
    </div>
    );
};

export default DoctorsDetails;