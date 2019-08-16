import React from "react";
import Slider from "react-slick";
import "../App.css";

class ResourcesSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      infinite: true,
      speed: 400
    };
    return (
      <section class="slick">
        <Slider {...settings}>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
          <div class="enlightenedVideo center pl-3 pr-3">
            <video
              width="100%"
              height="auto"
              poster={require("../assets/enlightenedDigital.png")}
            >
              <source
                src={require("../assets/enlightenedDigital.mp4")}
                type="video/mp4"
              />
            </video>
            Enlightened Digital - keep creative fresh
          </div>
        </Slider>
      </section>
    );
  }
}

export default ResourcesSlider;
