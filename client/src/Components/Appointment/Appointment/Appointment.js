import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
       setSelectedDate(date);
    }
    return (
        <div>
           <Navbar></Navbar>
           <BookAppointment date={selectedDate}></BookAppointment>
           <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
     
        </div>
    );
};

export default Appointment;