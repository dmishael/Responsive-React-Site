import React from "react";
import Slider from "react-slick";
import '../App.css';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      infinite: true,
      speed: 400,
    };
    return (

      <section class="slick">
      <Slider {...settings} height="150px" id="slideshow">
      <div><img class="clientSlider pl-3 pt-4" src={require('../assets/americancasualliving_logo.png')} alt="American Casual Living"/></div>
      <div><img class="clientSlider pl-3 pt-4" src={require('../assets/AU_PRIMARY-DARK.png')} alt="AU"/></div>
      <div><img class="clientSlider pl-3 pt-4" src={require('../assets/aurora_logo.png')} alt="Aurora"/></div>
      <div><img class="clientSlider pl-3 pt-4" src={require('../assets/gwinnett-medical-logo.png')} alt="Gwinnet Medical"/></div>
      <div><img class="clientSlider pl-3 pt-4" src={require('../assets/Mimaki.png')} alt="Mimaki"/></div>
      <div><img class="clientSlider pl-3 pt-4" src={require('../assets/Reserve_logo_horiz_green.png')} alt="The Reserve"/></div>
      <div><img class="clientSlider pl-3 pt-4" src={require('../assets/United-Way-Logo-1.png')} alt="United Way"/></div>
      </Slider>
      </section>

    );
  }
}

export default SimpleSlider
