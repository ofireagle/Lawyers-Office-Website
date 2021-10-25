import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


  
export default class Middle extends Component {

    componentDidMount = () => {

        
    }

    

    render() {
        AOS.init({
            offset: 400,
            duration: 1000
        });
        return (
            <div>
            <div className="middle-section">
                <div className="slider">
                    <div className="load">
                    </div>
                    <div className="content">
                        <div className="principal">
                            {/* <h1>WEBSITE</h1>
                            <p>Lorem ipsum dolar sit amet, just a dummy text being printerd on the screen as an example.</p> */}
                                
                        </div>
                    </div>
                    <div  className="welcome-text" >
                                        <h1>HENRY<span id="heller">-HELLER</span></h1>
                                        <h3>Henry Heller, Law Office & Mediator</h3>
                                        <br></br>
                                        <p>
                                        משרד עו"ד וגישור הלר (סלמה) הינו משרד בוטיק אזרחי-מסחרי בתחום דיני העבודה ושכר, המייצג מעסיקים ועובדים כאחד.
                                        המשרד מעניק ייצוג וליווי משפטי למעסיקים  ועובדים בסוגיות עובדים ושכר, בכל שלבי ההעסקה.
                                        משרדנו בעל מומחיות בעסקאות מקרקעין מכל הסוגים: דירות מקבלן, בתים, מגרשים, נחלות וכו'.
                                        עורך דין ומגשר הלר סלמה הינו בעל ניסיון רב בביצוע ועריכת הסכמים, תוך דאגה ושמירה על האינטרסים על הלקוח עד סיום העסקה ורישום הזכויות.
                                        משרדנו חרט על דגלו לתת את מלוא השירות תוך ליווי אישי יד ביד מראשית הדרך ועד סוף התהליך.
                                        לנוחיות וטובת מעגל לקוחותינו, המשרד דובר מספר שפות לרבות עברית, איטלקית, אנגלית, צרפתית, וספרדית.


                                    </p>
                                </div>
                </div>
            
            </div>
               
            </div>
        )
    }
}
