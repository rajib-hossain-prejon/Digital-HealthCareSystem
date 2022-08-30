import React from 'react';
import Sir from '../../images/sir.jpg';
import Shanto from '../../images/shanto.jpg';
import Rajib from '../../images/IMG_6017.jpg';
import ServiceDetails from '../Home/ServiceDetails/ServiceDetails';


const serviceData = [
    { 
        name: 'Md Safet Hossain',
        img: Sir,
        role: 'Head of the Department',
        dept: 'Dept. of CSE',
        institution: 'City University'

    },
    { 
        name: 'Abdul Khalek',
        img: Shanto,
        role: 'Student',
        dept: 'Dept. of CSE',
        institution: 'City University'

    },
    { 
        name: 'Md. Rajib Hossain',
        img: Rajib,
        role: 'Student',
        dept: 'Dept. of CSE',
        institution: 'City University'

    }
]

const Services = () => {
    
    return (
        <div className='service-container' >
      <div className='text-center' >
      <h3 className='text-primary '>OUR Team</h3>
      <h6>for</h6>
 <h2>Online Healthcare System</h2>
         
          </div>   
          
          
       <div className='d-flex justify-content-center'>
        <div className='w-75 row'>
        {
            serviceData.map(service => <ServiceDetails service={service}></ServiceDetails> )
           }
        </div>
       </div>
           </div>
    );
};

export default Services;