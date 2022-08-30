import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

// const bookingData = [
//     {
//         id:1,
//         subject: 'Teeth',
//         visitingHour: '8:00 AM -9.00 PM',
//         totalSpace: 10
//     },
//     {
//         id:2,
//         subject: 'Fever',
//         visitingHour: '8:00 AM -9.00 PM',
//         totalSpace: 10
//     },
//     {
//         id:3,
//         subject: 'Cough',
//         visitingHour: '8:00 AM -9.00 PM',
//         totalSpace: 10
//     },
//     {
//         id:4,
//         subject: 'Headache',
//         visitingHour: '8:00 AM -9.00 PM',
//         totalSpace: 30
//     },
//     {
//         id:5,
//         subject: 'Alergey',
//         visitingHour: '8:00 AM -9.00 PM',
//         totalSpace: 10
//     },
//     {
//         id:6,
//         subject: 'Pain',
//         visitingHour: '8:00 AM -9.00 PM',
//         totalSpace: 10
//     }

// ];
const DoctorAppointment = ({date}) => {

    const [selectedDate, setSelectedDate] = useState();
  
    const [appointments, setAppointments] = useState([]);
    const { register, handleSubmit, errors } = useForm();
    let speciality = '';
    
    const onSubmit = (data) => {
    
        let finalDisease = data.firstSymptomp;
        
     
 
        //Conditions For Disease
     
 
      
   
             speciality = finalDisease;
            
             
             setSelectedDate({speciality});
       };
    
    useEffect(() =>{
        
   

        fetch('http://localhost:5000/findDoctors',{
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify({speciality: selectedDate})
    })
    .then(res => res.json())
    .then(data =>
   setAppointments(data)
        )
},[selectedDate])

    return (
        <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <label htmlFor="" className='ml-5'>First Symptomp</label>
               <input className='form-control w-50 ml-5' name="firstSymptomp" ref={register}/>
      
     
    <input className='btn btn-success my-2 ml-5' type="submit" />
    </form>    
             <h4 className='alert alert-secondary' >Top Rated Doctors</h4>
            { 
            appointments.map(booking => <DoctorsCard booking = {booking} date={date} key={booking.id} >  </DoctorsCard>)
            }
            <h2 className='text-center primary'>Avaiable Appointments on {date.toDateString()} </h2>
        </div>
        
    );
};

export default DoctorAppointment;