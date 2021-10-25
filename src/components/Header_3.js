import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";


class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#bdbdbd  '}
    const container = {height: 1300}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar  style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/" >
                  <strong>Henry Heller</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar >
                <MDBNavbarNav right>
                <Link
                  activeClass="active"
                  to="middle-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                  >
                  <MDBNavItem >
                      <MDBNavLink to="#">בית</MDBNavLink>
                  </MDBNavItem></Link>
                  <Link
                  activeClass="active"
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration= {500}
                  >
                  <MDBNavItem>
                      <MDBNavLink to="#">אודות</MDBNavLink>
                  </MDBNavItem></Link>
                  <Link
                  activeClass="active"
                  to="isukim-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                  >
                  <MDBNavItem>
                      <MDBNavLink to="#">תחומי עיסוק</MDBNavLink>
                  </MDBNavItem></Link>
                  <Link
                  activeClass="active"
                  to="contact-us-section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration= {500}
                  >
                  <MDBNavItem>
                    <MDBNavLink to="#">צור קשר</MDBNavLink>
                  </MDBNavItem></Link>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;