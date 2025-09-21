
import './App.css';
import Navbar from './Comman/NAVIGATION/Navbar';
import Topbar from './Comman/TOPBAR/Topbar';
// import About from './Components/AboutUs/About';

import Banner from './Components/Banner/Banner';
import Service from './Components/Services/Service';
import Testimonial from './Components/Testimonial/Testimonial';
// import Infobox from './Components/Information/Infobox';
import FooterPage from './Comman/FOOTER/FooterPage';
import AboutUs from './Comman/NAVIGATION/HeroAbout/AboutUs';
import Services from './Comman/NAVIGATION/ServicePage/Services';
import Contact from './Comman/NAVIGATION/ContactPage/Contact';
import Appointment from './Comman/NAVIGATION/AppointmentBtn/Appointment';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Comman/NAVIGATION/Home/Home';


function App() {
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
