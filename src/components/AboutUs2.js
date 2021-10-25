import React, { Component } from 'react'
import Lawyer from '../images/henry4.JPG';
import ScrollMagic from 'scrollmagic';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default class AboutUs extends Component {

    componentDidMount = () => {
        // var controller = new ScrollMagic.Controller();

        // var scene = new ScrollMagic.Scene({
        //     triggerElement: '.about-us-section'
        // })

        // .setClassToggle('.about-us-section', 'show-about-us')
        // .addTo(controller);

  
    }



    render() {
        AOS.init({
            offset: 400,
            duration: 1000
        });
        return (

            <div className="aboutus">
                  <div className="row">
                
            <div className="item">

                <div className="images">
                    <img src={Lawyer}/>
                </div>
                <ul className="social">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>

                </ul>
                <div className="content">
                    <h2>
                        Henry Heller <br></br>
                        <span>Private Lawyer</span>
                    </h2>
                </div>
               
               
              
  =
               
            </div>
                  
                        <div className="col-sm-5">
                            <h2 className="text-right" data-aos="fade-up">עורך דין - הנרי הלר</h2>
                            <p data-aos="fade-right">עורך דין הנרי הלר סלמה, גדל והתחנך בעיר רומא שבאיטליה.
                            עו"ד הלר סלמה הינו עו"ד משנת 2015. עו"ד הנרי הלר סלמה הינו בעל תואר שני מוסמך במשפטים L.L.M  , עם התמחות במשפט מסחרי מאוניברסיטת תל אביב הוא התמחה  ושימש כיועץ משפטי בחברת אחזקות מהגדולות במשק הישראלי.
                            </p >
                            <p data-aos="fade-right">עו"ד הלר סלמה הינו מגשר מוסמך ובוגר קורס גישור מטעם גישור נווה צדק 
                            עו"ד הלר סלמה בעל הכשרה לערוך יפוי כוח מתמשך, הנחיות מקדימות לצורך מינוי אפוטרופוס ומסמך הבעת רצון. 
                            עורך דין  הלר סלמה מביא עמו ידע נרחב ונסיון רב בדיני עבודה, מקרקעין, חברות, צוואת וירושות.
                            </p>
                        </div>
                       
                    </div>
            </div>
        )
    }
}
