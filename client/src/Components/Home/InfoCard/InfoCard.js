import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './infocard.css';

const InfoCard = ({info}) => {
    console.log(info.icon);
    return (
        <div className='col-md-4'> 
<div className={`d-flex info-container info-${info.background}`}>
<div>
<FontAwesomeIcon className='info-icon mr-5' icon={info.icon} />
</div>
            <div className='justify-content-center'>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
            
            </div>
</div>
        </div>
    );
};

export default InfoCard;