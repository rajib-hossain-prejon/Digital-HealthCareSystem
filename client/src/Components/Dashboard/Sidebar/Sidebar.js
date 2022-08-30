import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
           <div className="w3-sidebar w3-light-grey w3-bar-block" style={{ marginLeft: 0}} >
  <h3 className="w3-bar-item">Dashboard</h3>
 
  <Link  to='/dashboard/appointment' > Check Appointments</Link>
  <p className='mx-2 mt-2'></p>
  <Link  to='/dashboard/addDoctor'> Add Doctors</Link>

</div>
        </div>
    );
};

export default Sidebar;