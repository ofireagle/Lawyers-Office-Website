import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Header from './components/Header'
import Header_2 from './components/Header_2'
import Header_3 from './components/Header_3'
import Header_4 from './components/Header_4'
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import Footer from './components/Footer';
import Middle from "./components/Middle";
import Middle1 from "./components/Middle1";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import AboutUs2 from "./components/AboutUs2"
import Isukim from './components/Isukim';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header_4/>
        <Middle/>
        <AboutUs/>
        <Isukim/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
