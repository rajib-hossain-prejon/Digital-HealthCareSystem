import React from 'react';
import chair from '../../images/d1.jpg';


const HeaderMain = () => {
    return (
     <main style={{height: '80vh'}} className="row d-flex align-items-center">
         <div className="col-md-4 offset-md-1">
             <h1>Welcome</h1>
<p>To our Online Healthcare System. Hope you will enjoy our app well. To Give your symptoms please press 'Give Symptoms</p>
<a href="/appointment"><button className="btn btn-primary" >Give Symptoms</button></a>
         </div>
        <div className="col-md-6">
<img src={chair} alt="" className="img-fluid rounded h-50" />
        </div>

     </main>
    );
};

export default HeaderMain;