import React, { useState } from 'react';
import DoctorsForm from '../DoctorsForm/DoctorsForm';


const DoctorsCard = ({booking, date}) => {
    

    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
        <div className="card p-1">
            <div className="card-body text-center">
        <img style={{height: '200px'}} src={`data:image/jpeg;base64,${booking.image.img}`} />
            <h5 className="card-title text-brand"> {booking.name}</h5>
<h6>{booking.visitingHour}</h6>
<p>{booking.speciality} Specialist</p>
<p>{booking.location}</p>
<button onClick={openModal} className="btn btn-primary text-uppercase">Book</button>
<DoctorsForm modalIsOpen={modalIsOpen} appointmentOn={booking.name} closeModal={closeModal} date={date}> </DoctorsForm>

</div>
        </div>
    </div>
    );
};

export default DoctorsCard;