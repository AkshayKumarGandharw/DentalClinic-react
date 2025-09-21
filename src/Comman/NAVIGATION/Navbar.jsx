 import React from 'react';
 import $ from 'jquery';
 import { Link } from 'react-router-dom';
 

 
 function Navbar() {

      $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });



   return (
     <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>Dental Clinic</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <Link  to='/' className="nav-item nav-link active">Home</Link>
                <Link to='/aboutus'  className="nav-item nav-link">About Us </Link>
                <Link to='/services'  className="nav-item nav-link">Services</Link> 
                 <Link to='/contact'  className="nav-item nav-link">Contact</Link>
                
            </div>
            <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
            <Link  to='/appointment' className="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
        </div>
    </nav>
   )
 }
 
 export default Navbar