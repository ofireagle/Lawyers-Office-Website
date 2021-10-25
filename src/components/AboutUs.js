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
            <div className="aboutus"  >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5" data-aos="fade-right">
                            <h2 className="text-center" data-aos="fade-up">עורך דין - הנרי הלר</h2>
                            <p>
                            עורך דין ומגשר הנרי הלר (סלמה), עלה למדינת ישראל מרומא שבאיטליה. 
                            עו"ד הנרי הלר הינו בעל תואר ראשון במשפטיםL.L.B  ובעל תואר שני מוסמך במשפטים L.L.M , עם התמחות במשפט מסחרי מאוניברסיטת תל-אביב.
                            עו"ד הלר הינו  בעל הכשרה לערוך יפויי כוח מתמשך, הנחיות מקדימות לצורך מינוי אפוטרופוס ומסמך הבעת רצון מטעם משרד המשפטים. 

                            </p >
                            <p >
                            כמו כן, עו"ד הלר הינו מגשר מוסמך ובוגר קורס גישור מטעם מרכז גישור נווה צדק. 
                            הוא התמחה ושימש כיועץ משפטי בחברת אחזקות מהגדולות במשק הישראלי.
                            עורך דין  הלר מביא עמו ידע נרחב וניסיון רב בדיני עבודה, מקרקעין, חברות, צוואת וירושות.
                            עורך דין הנרי הלר דובר מספר שפות בהם עברית, איטלקית, אנגלית, צרפתית, וספרדית. 
                            </p>
                        </div>
                        <div className="col-sm-7">
                            <div data-aos="fade-left" className="img-wrap">
                                <img src={Lawyer}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
  =
               
            </div>
        )
    }
}
