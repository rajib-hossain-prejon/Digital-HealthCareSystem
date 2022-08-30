import React, { useEffect, useState }from 'react';
import { useForm } from 'react-hook-form';
import BookingCard from '../BookingCard/BookingCard';

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


const BookAppointment = ({date}) => {



    const [selectedDate, setSelectedDate] = useState();
    const [medicines, setMedicines] = useState();
    const [advices, setAdvices] = useState();
    const [appointments, setAppointments] = useState([]);
    const { register, handleSubmit, errors } = useForm();
    let firstSymptomp = '';
    let secondSymptomp = '';
    let thirdSymptomp = '';
    let fourthSymptomp = '';
    let finalDisease = '';
    let speciality = '';
    const list = [];
    const list2 = [];
    let d=['Covid', 'Typhoed', 'Dengue', 'Maleria', 'Chikungniya', ];
d[-1] = 'Not Found';
let a =-1;
let i=0;
   

var arr=[
   


];

arr[0]=[
    { s1: 'Fever',s2: 'Diarrhea',s3: 'Loss of taste and smell'  }    
,{ s1: 'Headache',s2: 'Diarrhea',s3: 'Stomach pain'  } ,
{ s1: 'Headache',s2: 'Fever',s3: 'Rash'  },
{ s1: 'Headache',s2: 'Fever',s3: 'Vomiting'  },
{ s1: 'Joint Pain',s2: 'Fever',s3: 'Rash'  }
];
    arr[1]=[
        {s1: 'Diarrhea', s2: 'Fever',s3: 'Loss of taste and smell'  } 
    ,{s1: 'Diarrhea', s2: 'Headache',s3: 'Stomach pain'  },
    {s1: 'Fever', s2: 'Headache',s3: 'Rash'  },
    {s1: 'Fever', s2: 'Headache',s3: 'Vomiting'  },
    {s1: 'Fever', s2: 'Joint Pain',s3: 'Rash'  }
    
    ];
    arr[2]=[
        {s1: 'Loss of taste and smell'  , s2: 'Fever',s3: 'Diarrhea'}
  ,{s1: 'Stomach pain'  , s2: 'Headache',s3: 'Diarrhea'},
  {s1: 'Rash'  , s2: 'Headache',s3: 'Fever'},
  {s1: 'Vomiting'  , s2: 'Headache',s3: 'Fever'},
  {s1: 'Rash'  , s2: 'Joint Pain',s3: 'Fever'}
  ];
    arr[3]=[
        { s1: 'Fever',s2: 'Loss of taste and smell'  ,s3: 'Diarrhea'},
        { s1: 'Headache',s2: 'Stomach pain'  ,s3: 'Diarrhea'},
        { s1: 'Headache',s2: 'Rash'  ,s3: 'Fever'},
        { s1: 'Headache',s2: 'Vomiting'  ,s3: 'Fever'},
        { s1: 'Joint Pain',s2: 'Rash'  ,s3: 'Fever'}
    ];
    arr[4]=[
        {s1: 'Diarrhea',s2: 'Loss of taste and smell'  , s3: 'Fever'},
        {s1: 'Diarrhea',s2: 'Stomach pain'  , s3: 'Headache'},
        {s1: 'Fever',s2: 'Rash'  , s3: 'Headache'},
        {s1: 'Fever',s2: 'Vomiting'  , s3: 'Headache'},
        {s1: 'Fever',s2: 'Rash'  , s3: 'Joint Pain'}
    ];
    arr[5]=[
        {s1: 'Loss of taste and smell'  ,s2: 'Diarrhea', s3: 'Fever'},
        {s1: 'Stomach pain'  ,s2: 'Diarrhea', s3: 'Headache'},
        {s1: 'Rash'  ,s2: 'Fever', s3: 'Headache'},
        {s1: 'Vomiting'  ,s2: 'Fever', s3: 'Headache'},
        {s1: 'Rash'  ,s2: 'Fever', s3: 'Joint Pain'}
    ];

    var medi= [
        {s1: "নাপা 2 বার", s2: "অমিডোন ২০ ",s3: " ম্যাক্সপ্রো ২০"},
        {s1: "পারাছিটামল ৩ বার"},
        {s1: "নাপা ৩ বার", s2: "স্যালাইন",s3: "ইন্সট্যাড ২০"},
        {s1: "Fexo 10", s2: "Losectil 30 ২ বার খাবার পর"},
        {s1: "সেকলো "}     
    ];
    var ad= [
        {s1: "ঠান্ডা পানি খাবেন না", s2: "লেবু দিয়ে গরম পানি খাবেন"},
        {s1: "ডাবের পানি।", s2: "তরল খাবার। "},
        {s1: "ফলের রস", s2: " ডাবের পানি ",s3: "মশারি টানিয়ে ঘুমাবেন"},
        {s1: "মশারি টানিয়ে ঘুমাবেন", s2: "তরল খাবার খাবেন ", s3: " ঠান্ডা খাবার খাবেন না "  },
        {s1: "ভারি জিনিস তুলবেন না"}     
    ];
    const [disease, setDisease] = useState('No Symptomp Selected Yet.');
    
  

    const onSubmit = (data) => {
    
       firstSymptomp = data.firstSymptomp;
       secondSymptomp = data.secondSymptomp;
       thirdSymptomp = data.thirdSymptomp;
    

       //Conditions For Disease
    

       while(a<=-1 && i<=5 ){
    
        a = arr[i].findIndex(function(elem) {
            //return false for the element that matches both the name and the id
            return (elem.s1 === firstSymptomp && elem.s2 === secondSymptomp && elem.s3 === thirdSymptomp )
          });
          console.log(i);
          i++;
        
         
    }
    console.log(d[a]);
      finalDisease = d[a];
            speciality = finalDisease;
           
            setMedicines(medi[a]);
            setAdvices(ad[a])
          
            setDisease(finalDisease);
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

    
console.log(selectedDate);

for(var propt in medicines){
    list.push(<li>{medicines[propt]}</li>)
    
}

for(var propt1 in advices){
    list2.push(<li>{advices[propt1]}</li>)
    
}

    return (
        <section>
            
        
        <div className="ml-5">
        <div>
        <h1 className='alert alert-primary'>Give Three Symptoms </h1>
               <form onSubmit={handleSubmit(onSubmit)}>
                   <label htmlFor="">First Symptomp</label>
               <select className='form-control w-75' name="firstSymptomp" ref={register}>
        <option  value="Fever">Fever</option>
        <option value="Loss of taste and smell">Loss of taste and smell</option>
        <option value="Headache">Headache</option>
        <option value="Diarrhea">Diarrhea</option>
        <option value="Stomach pain">Stomach pain</option>
        <option value="Rash">Rash</option>
        <option value="Vomiting">Vomiting</option>
        <option value="Joint Pain">Joint Pain</option>
      </select>
      <label htmlFor="">Second Symptomp</label>
      <select className='form-control w-75' name="secondSymptomp" ref={register}>
      <option value="Fever">Fever</option>
        <option value="Loss of taste and smell">Loss of taste and smell</option>
        <option value="Headache">Headache</option>
        <option value="Diarrhea">Diarrhea</option>
        <option value="Stomach pain">Stomach pain</option>
        <option value="Rash">Rash</option>
        <option value="Vomiting">Vomiting</option>
        <option value="Joint Pain">Joint Pain</option>
        <option value="Rash">Rash</option>
        <option value="Vomiting">Vomiting</option>
        <option value="Joint Pain">Joint Pain</option>
      </select>
      <label htmlFor="">Third Symptomp</label>
      <select className='form-control w-75' name="thirdSymptomp" ref={register}>
      <option value="Fever">Fever</option>
        <option value="Loss of taste and smell">Loss of taste and smell</option>
        <option value="Headache">Headache</option>
        <option value="Diarrhea">Diarrhea</option>
        <option value="Stomach pain">Stomach pain</option>
        <option value="Rash">Rash</option>
        <option value="Vomiting">Vomiting</option>
        <option value="Joint Pain">Joint Pain</option>
      </select>

     
      <input className='btn btn-success my-2' type="submit" />
    </form>    
    <h4 className='alert alert-secondary'>You Are Possibly Affected By </h4>
  <h6 className='alert alert-danger'>{disease}</h6>
    
        </div>
        <h4 className='alert alert-secondary'>Recommeded Medicines</h4>
    <p className='alert alert-warning'>{
        list
    }</p>
<h4 className='alert alert-secondary ' >Primary Advices</h4>
    <p className='alert alert-success ' >{
        list2
    }</p>
    <h4 className='alert alert-secondary ' >Top Rated Doctors</h4>
            { 
            appointments.map(booking => <BookingCard booking = {booking} date={date} key={booking.id} >  </BookingCard>)
            }
            <h2 className='text-center primary'>Avaiable Appointments on {date.toDateString()} </h2>
        </div>
        </section>
    );
};

export default BookAppointment;