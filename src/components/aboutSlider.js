import React from "react";
import Slider from "react-slick";
import "../App.css";

class AboutSlider extends React.Component {
  render() {
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
    };
    return (
      <section class="slickTwo" id="slideshowTwo">
        <Slider {...settings} height="150px" id="slideshow">
          <div className="clientSlider pl-3 pt-4 text-center" id="clientQuote">
            {" "}
            From creative services to software development, they’ve exceeded all
            other marketing firms with whom I have done business. Frenik’s
            contributions to Campus Sports have been essential to our growth.
            <div className="mt-5" id="clientQuoteHeader">
              - FORREST W. COO, CAMPUS SPORTS
            </div>
          </div>
          <div className="clientSlider pl-3 pt-4 text-center" id="clientQuote">
            {" "}
            Frenik is a one stop shop for whatever you need to take your
            business or ideas to the next level. The service is outstanding and
            the level of creativity is revolutionary.
            <div className="mt-5" id="clientQuoteHeader">
              - PATRILLA JOHNSON, CORPORATE CUSTOMER CARE - T-MOBILE
            </div>
          </div>
          <div className="clientSlider pl-3 pt-4 text-center" id="clientQuote">
            From conception to execution, Frenik is there lending creative
            direction and big picture thinking every step of the way. Our
            particular project was video production, which included interviews
            with several leading companies. They handled our clients with a
            level of professionalism that is best-in-className. Their drive is
            to see you succeed. And they are likeable and fun, which we could
            all use more of.
            <div className="mt-5" id="clientQuoteHeader">
              - CALLY D’ANGELO, SENIOR PROGRAMS & EVENTS MANAGER - GWINNETT
              CHAMBER OF COMMERCE
            </div>
          </div>
          <div className="clientSlider pl-3 pt-4 text-center" id="clientQuote">
            {" "}
            “Please cut the campaign to half of what it is currently. It’s
            working too well and we can’t keep up with the leads.”
            <div className="mt-5" id="clientQuoteHeader">
              - DREW CAMPBELL, OWNER - PRECISION FENCE WORKS
            </div>
          </div>
          <div className="clientSlider pl-3 pt-4 text-center" id="clientQuote">
            {" "}
            From start to finish, Frenik was professional and a joy to work
            with, with out of the box solutions to help us reach our business
            goals. They have a wealth of ideas and provided us great direction
            in completing the projects using their best practices.
            <div className="mt-5" id="clientQuoteHeader">
              - DAVID WILLIAMS, SENIOR DATA ANALYST - GWINNETT MEDICAL CENTER
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default AboutSlider;
