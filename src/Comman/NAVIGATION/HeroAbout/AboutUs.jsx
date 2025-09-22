 import React from 'react';
 import '../../../App.css';
import About from '../../../Components/AboutUs/About'
import Dentist from '../../../PartsComp/Dentist'
import {Link} from 'react-router-dom';
 
 function AboutUs() {
   return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
            <div className="col-12 text-center">
                <h1 className="display-3 text-white animated zoomIn">About Us</h1>
                <Link to="/" className="h4 text-white nav-link">Home</Link>
                <i className="far fa-circle text-white px-2"></i>
                <a href="" className="h4 text-white">About</a>
            </div>
        </div>
    </div>
    <About/>
    <Dentist/>
    </>
   )
 }
 
 export default AboutUs