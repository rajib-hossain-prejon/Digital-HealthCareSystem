import React, {useState} from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AppointmentHeader from '../Appointment/AppointmentHeader/AppointmentHeader';
import BookAppointment from '../Appointment/BookAppointment/BookAppointment';
import DoctorAppointment from './DoctorAppointment/DoctorAppointment';
import DoctorHeader from './DoctorHeader/DoctorHeader';


const DoctorsInfo = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
       setSelectedDate(date);
    }
    
    return (
        <div>
             <Navbar></Navbar>
           {/* <BookAppointment date={selectedDate}></BookAppointment>
           <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader> */}
           <DoctorAppointment date={selectedDate}></DoctorAppointment>
<DoctorHeader handleDateChange={handleDateChange}></DoctorHeader>
          
            
        </div>
    );
};

export default DoctorsInfo;