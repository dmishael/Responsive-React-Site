import React from "react";
import Slider from "react-slick";
import "../App.css";

class SliderTwo extends React.Component {
  render() {
    var settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      infinite: true,
      speed: 400,
      centerMode: true,
      responsive: [
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }}
        ]}

    return (
      <section class="slick">
        <Slider {...settings} height="150px" id="slideshow">
          <div>
            <img
              class="sliderTwo pl-3 pt-4"
              src={require("../assets/homepage_slider_takedown.jpg")}
              alt="TKDN Image"
            />
          </div>
          <div>
            <img
              class="sliderTwo pl-3 pt-4"
              src={require("../assets/homepage_slider_takedown.jpg")}
              alt="TKDN Image"
            />
          </div>
          <div>
            <img
              class="sliderTwo pl-3 pt-4"
              src={require("../assets/homepage_slider_takedown.jpg")}
              alt="TKDN Image"
            />
          </div>

        </Slider>
      </section>
    );
  }
}

export default SliderTwo;
