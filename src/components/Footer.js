import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="elegant-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#rgba(96, 125, 139, 0.3)" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
           
            <MDBCol md="6" lg="7" className="text-center text-md-right">
               <a href="https://www.facebook.com/henry.hellersalama.1" target="_blank" className="li-ic">
                <i className="fab fa-facebook white-text mr-lg-4"> </i>
              </a>
              {/* <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a> */}
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=972502685662" target="_blank" className="li-ic">
                <i className="fab fa-whatsapp white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          
       
        </MDBRow>
        <div class="row">
        <div class="col-sm-7" style={{direction:"rtl", textAlign:"right"}}>
          <h3>Email:</h3>
          <p>Henry.heller.adv@gmail.com</p>
          <h3>טלפון משרד:</h3>
          <p>09-9773717</p>
        </div>
        {/* <div class="col-sm-4">
          <h3>טלפון:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div class="col-sm-4">
          <h3>Column 3</h3>        
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div> */}
      </div>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <span>Developed by Avi Revah and Ofir Eagle</span>
        </MDBContainer>
      </div>

     
    </MDBFooter>
  );
}

export default FooterPagePro;