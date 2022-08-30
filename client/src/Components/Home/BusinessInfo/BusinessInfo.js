import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faUserMd, faThermometerThreeQuarters, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const infosData = [
{
    title: 'Give Symptoms',
    description: 'give three symptoms',
    icon: faThermometerThreeQuarters,
    background: 'primary'
},
{
    title: 'Book Doctors',
    description: 'book quality doctors',
    icon: faUserMd,
    background: 'dark'
},
{
    title: 'Get Solution',
    description: 'Get Solution',
    icon: faCalendarCheck,
    background: 'primary'
}
];

const BusinessInfo = () => {
    return (
       <section className='d-flex justify-content-center'>
        <div className='w-75 row'>
        {
               infosData.map(info => <InfoCard info={info}></InfoCard>)
           }
        </div>
       </section>
    );
};

export default BusinessInfo;