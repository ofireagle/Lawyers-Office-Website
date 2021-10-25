import React, { Component } from 'react'
//import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {MDBCardTitle, MDBBtn} from 'mdbreact';
import ScrollMagic from 'scrollmagic';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Logo from '../images/henry.jpeg'


export default class ContactUs extends Component {
    state = {
        
    };

    componentDidMount = () => {
        
        var controller  = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
            triggerElement: '.contact-us-section'
        })
        .setClassToggle('.contact-us-section', 'show-contact-us')
        .addTo(controller);
        

    }

    render() {

        AOS.init({
            offset: 400,
            duration: 1000
        });
        
        return (
            <div class="isukim-section">
                <MDBCardTitle className="isukim-header">צרו קשר</MDBCardTitle>
                <hr style={{width: "20%"}}></hr>
                <div id="contact1">
                    <div className="email">
{/*                         <img id="emailLogo" src={Logo} style={{height:150, borderRadius: 100, position: "relative", left: "-25%", border: "2px solid #eee", marginBottom:"10px"}}/>
                        <br/>
 */}                    
                        <div id="insider">
                            <i class="fas fa-map-marker-alt"><label className="details">כתובת:</label></i>
                            <br/><label className="details">האומנות 6, איזור תעשייה פולג, נתניה</label><br/><br/>
                            <i class="fas fa-phone"><label className="details">טלפון:</label></i>
                            <br/><label className="details">09-9773717</label><br/><br/>
                            <i class="fas fa-fax"><label className="details">פקס:</label></i>
                            <br/><label className="details">15399773717</label><br/><br/><br/><br/>
                            <a id="sendMail" href="mailto:henryheller.adv@gmail.com" target="_black">שלח מייל</a><br/>
                        </div>
                    </div>
                </div>
                <div id="map">
                    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"async defer></script>
                    <iframe  id="map-box" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.253781392091!2d34.8618103845115!3d32.27815421656016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d40830006430b%3A0x7853d8e03fffaf26!2z15TXkNeV157XoNeV16ogNiwg16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1591536654714!5m2!1siw!2sil" frameborder="0" style={{border:0, allowfullscreen:"", ariaHidden:"false", tabindex:"0"}}></iframe>
                </div>     
            </div>
        )
    }

    onClick = () => {

            window.Email.send({
            Host : "smtp.gmail.com",
            Username : "",
            Password : "",
            To : "avirevah32@gmail.com",
            From : "",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
            message => alert("mail sent successfully")
            );
     
    }
}
