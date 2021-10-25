import React, { Component } from "react";
import Logo from '../images/henry-logo-1.jpeg'
import { Link, animateScroll as scroll } from "react-scroll";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
    trans:1,

  
};

componentDidMount = () => {

  this.app()
  
    
}

navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav  = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')


  burger.addEventListener('click', ()=> { 
    // Toggle nav
    nav.classList.toggle('nav-active');
    

    // Animate links
  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = ''
    }else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`

    }
  })

  // Burger animating //
  burger.classList.toggle('toggle')
  })
}


/// a way to make it work with one click and not double clicking // >>> look at componentDidMount
app = () => {
  this.navSlide();
}


render() {

  
  return (

    


    <nav>
    
        <div className="logo">
        <img className="logo" src={Logo}/>
        </div>
        <ul className="nav-links">
            <li>
            <Link
             activeClass="active"
             to="contact-us-section"
             spy={true}
             smooth={true}
             offset={-100}
             duration= {500}
             >
              <a href="#">צור קשר <MDBIcon icon="envelope" /></a> 
              </Link> 
            </li>
            
            <li>
            <Link
              activeClass="active"
              to="isukim-section"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >
              <a href="#">תחומי עיסוק <MDBIcon icon="gavel" /></a>  
              </Link>
            </li>
            <li>
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}
              >
              <a href="#">אודות <MDBIcon icon="book-open" /></a>  
              </Link>
            </li>
            <li >
            <Link 
              activeClass="active"
              to="middle-section"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >
              <a id="home" href="#">בית <MDBIcon icon="home" /></a>  
              </Link>
            </li>
        </ul>

        
        <div className="burger">
          <div  className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        
    </nav>
    
  )
  
    
  }
}

export default NavbarPage;