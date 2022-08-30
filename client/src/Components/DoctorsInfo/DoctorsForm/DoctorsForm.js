import React from 'react';

import Modal from 'react-modal';
import { useForm } from 'react-hook-form';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root');


const DoctorsForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('http://localhost:5000/addAppointment',{
      method: 'POSt',
      headers: {'content-type': 'application/json' },
      body: JSON.stringify(data)
    } )
    .then(res => res.json())
    .then(success =>{
      closeModal();
      alert('Success');
    }

    )
  
  };
    return (
        <div>
             
        <Modal
          isOpen={modalIsOpen}
                 onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className='text-center text-brand my-2' >{appointmentOn}</h2>
          <p className="text-secondary text-center">On {date.toDateString()}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
        <input className='form-control my-2' name="name" ref={register}  placeholder='Your name'/> {/* register an input */}
        {errors.firstname && 'First name is required.'}
        <input name="phone" className='form-control my-2' ref={register({ pattern: /\d+/ })}  placeholder='phone-no' />
        {errors.phone && ' Phone no. should be no.'}
        <input name="email" className='form-control my-2' ref={register({ required: true })} placeholder='email' />
        {errors.email && 'email name is required.'}
        
        <select name="gender" ref={register} className='form-control my-2'>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      
        <input name="age" ref={register({ pattern: /\d+/ })} className='form-control my-2' placeholder='age' />
        {errors.age && 'Please enter number for age.'}
        <input name="weight" style={{width: '50em'}} ref={register({ pattern: /\d+/ })} placeholder='weight' className='form-control my-2'/>
        {errors.weight && 'Please enter number for weight.'}
        <input className='btn btn-info' type="submit" />
      </form>
        </Modal>
          </div>
    );
};

export default DoctorsForm;