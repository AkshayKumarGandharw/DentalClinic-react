 import React, { useRef } from 'react';
 import '../../../App.css';
import AppointmentForm from '../../../PartsComp/AppointmentForm';
import {Link} from 'react-router-dom';
 

 
 function Appointment() {
     
   return (
     <>
       <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
            <div className="col-12 text-center">
                <h1 className="display-3 text-white animated zoomIn">Appointment</h1>
                <Link to="/" className="h4 text-white nav-link">Home</Link>
                <i className="far fa-circle text-white px-2"></i>
                <a href="" className="h4 text-white">Appointment</a>
            </div>
        </div>
    </div>
     <div className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{marginTop: "90px"}}>
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 py-5">
                    <div className="py-5">
                        <h1 className="display-5 text-white mb-4">We Are A Certified and Award Winning Dental Clinic You Can Trust</h1>
                        <p className="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 className="text-white mb-4">Make Appointment</h1>
                        
                        <AppointmentForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
   )
 }
 
 export default Appointment