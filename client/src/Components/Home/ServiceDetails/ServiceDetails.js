import React from 'react';

const ServiceDetails = ({service}) => {
   
    return (
        <div className='col-md-4 text-center mt-5 shadow p-3 mb-5 bg-white rounded'>
            <img className='rounded-circle' style={{height: '12em', width: '12em'}}  src={service.img} alt="" />
            <h5 className='my-2'>{service.name}</h5>
            <p className='text-secondary mx-0 p-0'>{service.role}</p>
            <p className='text-secondary mx-0 p-0'>{service.dept}</p>
            <p className='text-secondary mx-0 p-0'>{service.institution}</p>
        </div>
    );
};

export default ServiceDetails;