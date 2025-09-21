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
                <a  href='/' className="nav-item nav-link active">Home</a>
                <a href='/aboutus'  className="nav-item nav-link">About Us </a>
                <a href='/services'  className="nav-item nav-link">Services</a> 
                 <a href='/contact'  className="nav-item nav-link">Contact</a>
                
            </div>
            <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
            <a  href='/appointment' className="btn btn-primary py-2 px-4 ms-3">Appointment</a>
        </div>
    </nav>
   )
 }
 
 export default Navbar