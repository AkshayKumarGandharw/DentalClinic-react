 import React from 'react';
 import '../../../App.css';
import Service from '../../../Components/Services/Service'
import {Link} from 'react-router-dom';
 
 function Services() {
   return (
    <>
     <div class="container-fluid bg-primary py-5 hero-header mb-5">
        <div class="row py-3">
            <div class="col-12 text-center">
                <h1 class="display-3 text-white animated zoomIn">Services</h1>
                <Link to="/" class="h4 text-white nav-link">Home</Link>
                <i class="far fa-circle text-white px-2"></i>
                <a href="" class="h4 text-white">Services</a>
            </div>
        </div>
    </div>
    <Service/>
    </>
   )
 }
 
 export default Services