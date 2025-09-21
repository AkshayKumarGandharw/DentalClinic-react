import React from 'react';
import $ from 'jquery';
import Testimonial from '../../../Components/Testimonial/Testimonial'
import Banner from '../../../Components/Banner/Banner'
import About from '../../../Components/AboutUs/About';
import Service from '../../../Components/Services/Service';


function Home() {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Testimonial />
    </>
  )
}

export default Home