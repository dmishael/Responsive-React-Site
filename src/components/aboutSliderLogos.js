import React from "react";
import Slider from "react-slick";
import "../App.css";

class AboutSliderLogos extends React.Component {
  render() {
    var settings = {
      full_width: false,
      slidesToShow: 5,
      no_wrap: true,
      autoplay: false,
    };
    return (
      <section class="slick">
        <Slider {...settings} height="150px" id="slideshow">
          <div>
            <img
              class="clientSlider pl-3 pt-4"
              src={require("../assets/executive.png")}
              alt="executive"
            />
          </div>
          <div>
            <img
              class="clientSlider pl-3 pt-4"
              src={require("../assets/redandblack.png")}
              alt="red and black"
            />
          </div>
          <div>
            <img
              class="clientSlider pl-3 pt-4"
              src={require("../assets/voyage.png")}
              alt="voyage"
            />
          </div>
          <div>
            <img
              class="clientSlider pl-3 pt-4"
              src={require("../assets/ajc.png")}
              alt="ajc"
            />
          </div>
          <div>
            <img
              class="clientSlider pl-3 pt-4"
              src={require("../assets/gwinnett.png")}
              alt="gwinnett"
            />
          </div>
        </Slider>
      </section>
    );
  }
}

export default AboutSliderLogos;
