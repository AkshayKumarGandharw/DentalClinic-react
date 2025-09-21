
import './App.css';
import $ from 'jquery';
import Navbar from './Comman/NAVIGATION/Navbar';
import Topbar from './Comman/TOPBAR/Topbar';


import Banner from './Components/Banner/Banner';
import Service from './Components/Services/Service';
import Testimonial from './Components/Testimonial/Testimonial';

import FooterPage from './Comman/FOOTER/FooterPage';
import AboutUs from './Comman/NAVIGATION/HeroAbout/AboutUs';
import Services from './Comman/NAVIGATION/ServicePage/Services';
import Contact from './Comman/NAVIGATION/ContactPage/Contact';
import Appointment from './Comman/NAVIGATION/AppointmentBtn/Appointment';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Comman/NAVIGATION/Home/Home';



function App() {

  
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


       // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

  return (
    <>
    <Router>
    <Topbar/>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/appointment' element={<Appointment/>}/>
    
    {/* <Infobox/> */}
   
    
    </Routes>
    <FooterPage/>
   </Router>
    
    </>
  );
}

export default App;
