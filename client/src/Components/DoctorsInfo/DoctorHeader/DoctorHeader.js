import React from 'react';
import chair from '../../../images/d1.jpg';
import Calendar from 'react-calendar';
import '../../Home/Header/Header.css';
import 'react-calendar/dist/Calendar.css';

const DoctorHeader = ({handleDateChange}) => {
    return (
        <main style={{height: '80vh'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
        <Calendar
       onChange={handleDateChange}
       value={new Date()}
     />
        </div>
       <div className="col-md-6">
<img src={chair} alt="" className="img-fluid" />
       </div>

    </main>
    );
};

export default DoctorHeader;