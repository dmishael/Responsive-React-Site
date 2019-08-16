import React from "react";
import Slider from "react-slick";
import "../App.css";

class HomeSlider extends React.Component {
  render() {
    var settings = {
      full_width: true,
      numVisible: 3,
      padding: 200,
      shift: 5,
      no_wrap: true,
    }
    return (
      // <section class="carousel">
        <Slider {...settings}>
          <a class="carousel-item" href="#one!">
            <img
              src={require("../assets/americancasualliving_logo.png")}
              alt="ACL"
            />
          </a>
          <a class="carousel-item" href="#two!">
            <img src={require("../assets/Mimaki.png")} alt="M" />
          </a>
          <a class="carousel-item" href="#three!">
            <img src={require("../assets/United-Way-Logo-1.png")} alt="UW" />
          </a>
        </Slider>
      // </section>
    )
  }
}

export default HomeSlider;
