import React, { Component } from "react";
import "../App.css";
import Slider from "react-slick";
import SimpleSlider from "./simpleSlider.js";
import HomeSlider from "./homeSlider.js";
import ResourcesSlider from "./resourcesCarousel.js";
// import AboutSliderLogos from "./aboutSliderLogos.js";

class Resources extends Component {

  render() {
    // console.log(this.props.social)
    return (
      <div className="Resources">
      <div class="resourcesHero wpHeader">

  // nav bar

  <nav class="navbar position navbar-expand-lg navbar-dark bg-transparent">
    <a class="navbar-brand" href="#"><img src={require("../assets/frenik_grey_logo.png")} class="fmglogo" alt="frenik logo"/> </a>
    <button class="hamburger navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>

    </button>



    <div class="mr-5 collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="m-5 nav-item">
          <a class="navLink" href="#">Work</a>
        </li>
        <li class="m-5 nav-i   tem">
          <a class="navLink" href="#">Capabilities</a>
        </li>
        <li class="m-5 nav-item">
          <a class="navLink" href="#">About</a>
        </li>
        <li class="m-5 nav-item">
          <a class="navLink" href="#">Resources</a>
        </li>
      </ul>
    </div>
  </nav>

// end nav bar

  // header


  <div class="pb-2 mb-2 wpHeaderText1 resourcesHeader d-flex justify-content-center">
    the more you know
  </div>

  <div class="pt-4 mt-5 wpHeaderText2 text-center">
    Are you the kind of person who likes to learn and challenge conventional wisdom? Us, too. We think you’ll like these.
  </div>


</div>

<div class="row resourcesHeaderNav text-center pt-4 pb-4">

  <div class="col-sm-2">
    <div class="resourcesHeaderLinks">
      <a href="#" class="center-align">new posts</a>
    </div>
  </div>

  <div class="col-sm-2">
    <div class="resourcesHeaderLinks">
      <a href="#" class="center-align">social media</a>
    </div>
  </div>

  <div class="col-sm-2">
    <div class="resourcesHeaderLinks">
      <a href="#" class="center-align">technology</a>
    </div>
  </div>

  <div class="col-sm-2">
    <div class="resourcesHeaderLinks">
      <a href="#" class="center-align">industry news</a>
    </div>
  </div>

  <div class="col-sm-2">
    <div class="resourcesHeaderLinks">
      <a href="#" class="center-align">video</a>
    </div>
  </div>



</div>

<div class="enlightedDigital">
<div class="p-5 m-5  d-flex justify-content-center weDoAlot ">
  enlightened digital
</div>

<section id="slideshow" class=" slick m-5">
  <div class="slick noGrey">
      <ResourcesSlider class="slick noGrey" id="slideshow" />
  </div>
</section>
</div>

<footer class="mt-5 pt-5">
  <div class="pt-4 d-flex justify-content-center">
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require("../assets/fbicon.png")} alt="facebook"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require("../assets/igicon.png")} alt="instagram"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require("../assets/liicon.png")} alt="linkedin"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require("../assets/yticon.png")} alt="youtube"/></a>
  </div>
  <div class=" d-flex justify-content-center">
    <a class="p-4 bd-highlight footerlinks" href="#">Work</a>
    <a class="p-4 bd-highlight footerlinks" href="#">Capabilities</a>
    <a class="p-4 bd-highlight footerlinks" href="#">About</a>
    <a class="p-4 bd-highlight footerlinks" href="#">Resources</a>
  </div>
  <div class="pt-3 d-flex justify-content-center">
    <p>855.937.3645 | <a class="email" href="mailto:someone@example.com">
        support@freniklabs.com</a>.</p>
  </div>
  <div class="pt-1 d-flex justify-content-center">
    <p> 4940 Peachtree Ind Blvd, Ste. #320, Berkley Lake, GA </p>
  </div>
  <div class="pt-1 d-flex justify-content-center">
    <p class="copyright"> © Frenik Marketing Group, 2019 </p>
  </div>


</footer>

  </div>
    )
  }
}
export default Resources;
