import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
          <div className="box">
                        <h2>01</h2>
                        <h3>דיני עבודה</h3>
                        <p>משרדנו בעל מומחיות בתחום דיני העבודה והזכויות הסוציאליות של כל עובד. משרדנו מייצג מעסיקים ועובדים בהצלחה רבה והביא למימוש זכויות ותשלום כספים המגיעים לעובדים על פי דין.
עו"ד הנרי הלר סלמה הינו עורך דין לענייני עבודה, בעל ניסיון רב בייעוץ וייצוג מעסיקי ועובדים בבתי הדין לעבודה בערכאות השונות.
משרדנו מסייע בכל מה שקשור לדיני עבודה ותעסוקה: אם פוטרתם שלא כחוק, אם לא קיבלתם את הכספים המגיעים לכם כמו דמי הבראה, פנסיה, ושלל הפרשות מהמעסיק הלנת שכר, פיטורים, הסכמי עבודה, דמי הבראה, שימוע, הרעת תנאים ועוד. 
</p>


                    </div>
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;