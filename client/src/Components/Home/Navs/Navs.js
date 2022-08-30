import React from 'react';

const Navs = () => {
    return (
        <div>
             <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand mx-5" href="#" >DHS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav ">
      <li class="nav-item active ">
        <a class="nav-link mr-5 " href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 " href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="/dashboard/appointment">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Contact US</a>
      </li>
     
    </ul>
  
  </div>
</nav>
        </div>
    );
};

export default Navs;