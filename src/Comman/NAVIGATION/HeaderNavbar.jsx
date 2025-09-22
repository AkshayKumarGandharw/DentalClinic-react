import React from 'react';
// import $ from 'jquery';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import HeaderMenu from '../../JsonFile/HeaderMenu.json';


function HeaderNavbar() {

    //   $(window).scroll(function () {
    //     if ($(this).scrollTop() > 40) {
    //         $('.navbar').addClass('sticky-top');
    //     } else {
    //         $('.navbar').removeClass('sticky-top');
    //     }
    // });


    function HeaderMn({ item }) {
        return (
            <Link className={`nav-link ${item.textcolorMenu} `} to={item.link} >{item.label}</Link>

        )
    }
    function Headerdrowpdown({ item }) {
        return (
            <NavDropdown title={item.label} >
                {
                    // extecute map  method
                    item.dropdownMenu.map((item, index) => {
                        return <Link className={`dropdown-item`} to={item.link} key={index}>{item.label}</Link>
                    })
                }

            </NavDropdown>

        )
    }


    return (
        <>
            {/* <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
            <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>Dental Clinic</h1>
        </Link>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <Link  to='/' className="nav-item nav-link active">Home</Link>
                <Link to='/aboutus'  className="nav-item nav-link">About Us </Link>
                <Link to='/services'  className="nav-item nav-link">Services</Link> 
                 <Link to='/contact'  className="nav-item nav-link">Contact</Link>
                
            </div>
            <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
            <Link  to='/appointment' className="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
        </div>
       
    </nav> */}

            <Navbar expand="md" className="navbar navbar-expand-lg bg-white navbar-light shadow-sm ">
                <Container>
                    
                       <Link to="/" className="navbar-brand p-0">
                                <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>Dental Clinic</h1>
                            </Link>
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav ms-auto py-0">
                            
                            {
                                //execute map method
                                HeaderMenu.map((item, index) => {
                                    if (item.isDropdown === true) {
                                        return <Headerdrowpdown item={item} key={index} />
                                    }
                                    else {

                                        return <HeaderMn item={item} className={item.textcolorMenu} key={index} />
                                    }

                                })

                            }
                            <button  className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                            <Link to='/appointment' className="btn btn-primary btnappointment px-4 ms-3">Appointment</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default HeaderNavbar;