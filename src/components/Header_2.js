import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  
};

componentDidMount = () => {
  const indicator = document.querySelector('.nav-indicator');
  const items = document.querySelectorAll('.nav-item');

    function handleIndicator(el) {
      items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
      });
      
      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute('active-color');

      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');
    }


    items.forEach((item, index) => {
      item.addEventListener('click', (e) => { handleIndicator(e.target)});
      item.classList.contains('is-active') && handleIndicator(item);
    });
}



render() {
  return (

    <div className="navbar_header">
      <nav class="nav">
        <a href="#" class="nav-item" active-color="green">צור קשר</a>
        <a href="#" class="nav-item" active-color="blue">תחומי עיסוק</a>
        <a href="#" class="nav-item" active-color="red">אודות</a>
        <a href="#" class="nav-item is-active" active-color="orange">בית</a>
        <span class="nav-indicator"></span>
      </nav>
    </div>
  )
  
    
  }
}

export default NavbarPage;