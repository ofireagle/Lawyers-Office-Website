import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";


import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false,
  trans:1,
  isActive1:true,
  isActive2:false,
  isActive3:false,
  isActive4:false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

componentDidMount = () =>{



  // this function is for the navbar opacity with an onscroll method //

  window.addEventListener('scroll' , ()=>{
    const scrollY = window.scrollY;
    if(scrollY > 0 ){
      this.setState({trans:0.6})
    }
    else if(scrollY == 0)
    this.setState({trans:1})
  })
}


  toggleActive = (e) => {   // I FEEL VERY STUPID!
   if(e==="4"){
     this.setState({isActive4:true,isActive1:false, isActive2:false, isActive3:false})
   } 
   else if(e==="3"){
     this.setState({isActive3:true, isActive1:false, isActive2:false, isActive4:false})
   }
   else if(e==="2"){
     this.setState({isActive2:true,isActive1:false, isActive3:false, isActive4:false})
   } 
   else{
     this.setState({isActive1:true, isActive2:false, isActive3:false, isActive4:false})
   }
   
  }


render() {
  return (
    
     
    
      <MDBNavbar style={{opacity:this.state.trans}} className="header" color="elegant-color-dark" dark expand="md" >
        <MDBNavbarBrand className="Logo">
          <strong className="white-text">H-H</strong>
          <span>Law Office</span>

          {/* <img src={Henry} alt="henry-logo" /> */}
          
        </MDBNavbarBrand> 
        <MDBNavbarBrand className="henry-logo">
            
        </MDBNavbarBrand>
      
        <MDBNavbarToggler color="elegant-color-dark" onClick={this.toggleCollapse} />
        <MDBCollapse  id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
<Router>
          <Link
            activeClass="active"
            to="contact-us-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration= {500}
            >
              <MDBNavItem active={this.state.isActive4}>
                <MDBNavLink  onClick={()=> this.toggleActive("4")} to="#!">צור קשר</MDBNavLink>
              </MDBNavItem>
            </Link>
         
            <Link
              activeClass="active"
              to="isukim-section"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >

            <MDBNavItem active={this.state.isActive3}>
              <MDBNavLink onClick={()=> this.toggleActive("3")} to="#!">תחומי עיסוק</MDBNavLink>
            </MDBNavItem>
            </Link>
              <Link
              activeClass="active"
              to="about-us-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}
              >
                <MDBNavItem active={this.state.isActive2}>
                  <MDBNavLink onClick={()=> this.toggleActive("2")} to="#!">אודות</MDBNavLink>
                </MDBNavItem>
              </Link>
           
            <Link
              activeClass="active"
              to="middle-section"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >
            <MDBNavItem active={this.state.isActive1}>
              <MDBNavLink  onClick={()=> this.toggleActive("1")} to="#!">בית</MDBNavLink>
            </MDBNavItem>

            </Link>

            </Router>
          </MDBNavbarNav>
          {/* <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input style={{textAlign:"right"}}className="form-control mr-sm-2" type="text" placeholder="חיפוש" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav> */}
        </MDBCollapse>
      </MDBNavbar>
   
    );
  }
}

export default NavbarPage;