import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  
    return (
        <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand mx-5" href="/" >OHS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav ">
      <li class="nav-item active ">
        <a class="nav-link mr-5 " href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 " href="/alldoctors">Search Doctor Menually</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="/dashboard/appointment   ">Dashboard</a>
      </li>
{/*     
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Services</a>
      </li>
    
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Contact US</a>
      </li> */}
      <li class="nav-item">
      <li class="nav-item d-flex">
      <p> {loggedInUser.name}</p>
      <img style={{height:'2.6em'}} className='rounded-circle ml-2' src={loggedInUser.photo} alt="" />
      </li>
      </li>
    </ul>
  
  </div>
</nav>
        </div>
    );
};

export default Navbar;