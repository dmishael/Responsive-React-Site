import React, { Component } from "react";
import "../App.css";
import Slider from "react-slick";
import SimpleSlider from "./simpleSlider.js";
import HomeSlider from "./homeSlider.js";
import AboutSlider from "./aboutSlider.js";
import Quiz from "./quiz.js"

import BlogPosts from "./blogPosts.js"

class Capabilities extends Component {

  render() {

    return (
      <div className="Capabilities">
      <div class="capabilitiesHero wpHeader">


  <nav class="navbar position navbar-expand-lg navbar-dark bg-transparent">
    <a class="navbar-brand" href="/"><img src={require("../assets/frenik_grey_logo.png")} class="fmglogo" alt="frenik logo"/> </a>
    <button class="hamburger navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>

    </button>



    <div class="mr-5 collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="m-5 nav-item">
          <a class="navLink" href="/work">Work</a>
        </li>
        <li class="m-5 nav-item">
          <a class="navLink" href="/capabilities">Capabilities</a>
        </li>
        <li class="m-5 nav-item">
          <a class="navLink" href="/about">About</a>
        </li>
        <li class="m-5 nav-item">
          <a class="navLink" href="/resources">Resources</a>
        </li>
      </ul>
    </div>
  </nav>




  <div class="pb-2 mb-2 wpHeaderText1 d-flex justify-content-center">
    We do it all
  </div>
</div>

<div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
  the way we work
</div>

<div class="row p-4 m-2 ">
  <div class="col-md-4">
    <div class="m-auto" id="circleLogo">
      <img class="capabilitiesLogos ml-4 mt-3" src={require("../assets/icon_service_01.png")} alt="Railmo"/>
    </div>
    <h3 class=" wayWeWorkHeader text-center pt-5"> Full Service </h3>
    <p class="text-center wayWeWorkText pt-2"> From digital advertising to website development to content creation, we do it all.</p>
  </div>

  <div class="col-md-4">
    <div class="m-auto" id="circleLogo">
      <img class="capabilitiesLogos ml-4 mt-3" src={require("../assets/icon_service_02.png")} alt="Railmo"/>
    </div>
    <h3 class=" wayWeWorkHeader text-center pt-5"> ad hoc </h3>
    <p class="text-center wayWeWorkText pt-2"> Whatever you need, we can tackle those one-off, specific issues, too.</p>
  </div>

  <div class="col-md-4">
    <div class="m-auto" id="circleLogo">
      <img class="capabilitiesLogos ml-4 mt-3" src={require("../assets/icon_service_03-1.png")} alt="Railmo"/>
    </div>
    <h3 class=" wayWeWorkHeader text-center pt-5"> Full Service </h3>
    <p class="text-center wayWeWorkText pt-2"> From digital advertising to website development to content creation, we do it all.</p>
  </div>
</div>

<div class="pt-5 mt-5 hpHeaderText3 d-flex justify-content-center">
  <img class="arrow arrowBounce" src={require("../assets/arrow.png")} alt="arrow"/>

</div>

<div class="row mt-5">
  <div class="col-md-6 pr-2 my-auto ">
    <h3 class="text-center text-md-left wayWeWorkHeader pr-5 mt-5"> help you find yourself & tell your story </h3>
    <ul class="text-center text-md-left wayWeWorkText pt-2">
      <hr class="min" width="20%" color="#D6DD29"/>
      <li>Branding</li>
      <li>PR</li>
      <li>Social</li>
    </ul>
  </div>
  <video class="col-md-6 order-first p-0 m-0" width="100%" height="100%" controls>
    <source src={require("../assets/Frenik-Brand-Video.mp4")} type="video/mp4"/>
  </video>
</div>

<div class="row">
  <div class="col-md-6 order-md-first pl-5 my-auto">
    <h3 class="text-center text-md-left wayWeWorkHeader mt-5"> make all the things for you </h3>
    <ul class="text-center text-md-left wayWeWorkText ">
      <hr class="min" width="20%" color="#D6DD29"/>
      <li>Creative Services</li>
      <li>Video Production</li>
      <li>Technology Development</li>
    </ul>
  </div>
  <video class="col-md-6 order-first m-0 p-0 " width="100%" height="100%" controls>
    <source src={require("../assets/Frenik-Brand-Video.mp4")} type="video/mp4"/>
  </video>

</div>

<div class="row mt-5">
  <div class="col-md-6 pr-2 my-auto">
    <h3 class="text-center text-md-left wayWeWorkHeader pr-5 mt-5"> find new customers, improve loyalty </h3>
    <ul class="text-center text-md-left wayWeWorkText pt-2">
      <hr class="min" width="20%" color="#D6DD29"/>
      <li>SEO & SEM</li>
      <li>Digital Advertising</li>
      <li>Traditional Media</li>
      <li>Experiential</li>
    </ul>
  </div>
  <video class="col-md-6 order-first p-0 m-0" width="100%" height="100%" controls>
    <source src={require("../assets/Frenik-Brand-Video.mp4")} type="video/mp4"/>
  </video>
</div>

<div class="row">
  <div class="col-md-6 order-md-first pl-5 my-auto">
    <h3 class="text-center text-md-left wayWeWorkHeader mt-5"> convert & inform </h3>
    <ul class="text-center text-md-left wayWeWorkText ">
      <hr class="min" width="20%" color="#D6DD29"/>
      <li>Monthly Reporting</li>
      <li>KPI Dashboards</li>
      <li>Actionable Data</li>
      <li>Optimization</li>
    </ul>
  </div>
  <video class="col-md-6 order-first m-0 p-0 " width="100%" height="100%" controls>
    <source src={require("../assets/Frenik-Brand-Video.mp4")} type="video/mp4"/>
  </video>

</div>






  <div>
    <Quiz/>
  </div>


<div>
  <BlogPosts/>
</div>


<footer>
  <div class="pt-4 d-flex justify-content-center">
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require("../assets/fbicon.png")} alt="facebook"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require("../assets/igicon.png")} alt="instagram"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require("../assets/liicon.png")} alt="linkedin"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require("../assets/yticon.png")} alt="youtube"/></a>
  </div>
  <div class=" d-flex justify-content-center">
    <a class="p-4 bd-highlight footerlinks" href="/work">Work</a>
    <a class="p-4 bd-highlight footerlinks" href="/capabilities">Capabilities</a>
    <a class="p-4 bd-highlight footerlinks" href="/about">About</a>
    <a class="p-4 bd-highlight footerlinks" href="/resources">Resources</a>
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
export default Capabilities;
