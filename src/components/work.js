import React, { Component } from "react";
import "../App.css";
import Slider from "react-slick";
import SimpleSlider from "./simpleSlider.js";
import HomeSlider from "./homeSlider.js";
import AboutSlider from "./aboutSlider.js";
import Quiz2 from "./quiz2.js"

class Work extends Component {

  render() {

    return (
      <div className="Work">
        <div className="workHero wpHeader">


    <nav className="navbar position navbar-expand-lg navbar-dark bg-transparent">
      <a className="navbar-brand" href="/"> <img src={require("../assets/frenik_grey_logo.png")} className="fmglogo" alt="frenik logo"/> </a>
      <button className="hamburger navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>

      </button>



      <div className="mr-5 collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="m-5 nav-item">
            <a className="navLink" href="/work">Work</a>
          </li>
          <li className="m-5 nav-item">
            <a className="navLink" href="/capabilities">Capabilities</a>
          </li>
          <li className="m-5 nav-item">
            <a className="navLink" href="/about">About</a>
          </li>
          <li className="m-5 nav-item">
            <a className="navLink" href="/resources">Resources</a>
          </li>
        </ul>
      </div>
    </nav>






    <p className="pb-1 mb-1 wpHeaderText1 m-auto">
      We Like Storytelling
    </p>

    <p className="pt-3 mt-3 wpHeaderText2 text-align-center">
      Here are just a few stories of how we’ve worked with clients in the past.
    </p>
    <p className="pt-5 mt-5 wpHeaderText2 text-align-center">
      Click to learn more, or call us if you want us to talk your ear off (we’ll do it, too).
    </p>

  </div>


  <div className="row pt-3 mt-5 ">
    <div className="col-sm-4">
      <h5 className="workClients m-3 p-3" align="center">advanced urology</h5>
      <img className="workClientImages center-block" src={require("../assets/advanced-urology_thumbnail.jpeg")} alt="Railmo"/>
    </div>

    <div className="col-sm-4">
      <h5 className="workClients m-3 p-3" align="center">cardiovascular group</h5>
      <img className="workClientImages center-block" align="center" src={require("../assets/cvg_thumbnail.jpeg")} alt="Railmo"/>
    </div>

    <div className="col-sm-4">
      <h5 className="workClients m-3 p-3" align="center">railmo</h5>
      <img className="workClientImages center-block" align="center" src={require("../assets/railmo_thumbnail.jpeg")} alt="Railmo"/>
    </div>

  </div>

  <div className="row pt-3 mt-5 ">
    <div className="col-sm-4">
      <h5 className="workClients m-3 p-3" align="center">mitsubishi electric classNameic</h5>
      <img className="workClientImages center-block" src={require("../assets/workpage_hero_mec.jpg")} alt="Railmo"/>
    </div>

    <div className="col-sm-4">
      <h5 className="workClients m-3 p-3" align="center">greater atlanta christian school</h5>
      <img className="workClientImages center-block" align="center" src={require("../assets/GACS_thumbnail.jpg")} alt="Railmo"/>
    </div>

    <div className="col-sm-4">
      <h5 className="workClients m-3 p-3" align="center">takedown inc</h5>
      <img className="workClientImages center-block" align="center" src={require("../assets/homepage_slider_takedown.jpg")} alt="Railmo"/>
    </div>

  </div>

  <div className="pt-2 mt-5  d-flex justify-content-center weDoAlot">
    even more happy clients
  </div>

  <div className="row pt-1 mt-2 ">
    <div className="col-sm-4">
      <img className="workClientLogos center-block" src={require("../assets/american_painting.png")} alt="Railmo"/>
    </div>

    <div className="col-sm-4">
      <img className="workClientLogos center-block" src={require("../assets/CAB_INC_logo.png")} alt="Railmo"/>
    </div>

    <div className="col-sm-4">
      <img className="workClientLogos center-block" src={require("../assets/EastsideMC_logo.png")} alt="Railmo"/>
    </div>

  </div>

  <div className="row pt-1 mt-2 ">
    <div className="col-sm-4">
      <img className="workClientLogos center-block" src={require("../assets/ASB-logo_rgb.png")} alt="Railmo"/>
    </div>

    <div className="col-sm-4">
      <img className="workClientLogos center-block" src={require("../assets/thewagency_logo.png")} alt="Railmo"/>
    </div>

    <div className="col-sm-4">
      <img className="workClientLogos center-block" src={require("../assets/Findling_Law_logo.png")} alt="Railmo"/>
    </div>

  </div>

  <div className="p-5 m-5  d-flex justify-content-center weDoAlot">
    people say the nicest things
  </div>

  <div className="container">
    <div className="row">
      <img className="center-block" src={require("../assets/quote.png")} alt="Quote"/>
    </div>
  </div>

  <div className="m-5">

    <section id="slideshowTwo">
      <div className="slickTwo">

          <AboutSlider />


      </div>
      </section>
  </div>




  <video width="100%" height="auto" controls>
    <source src={require("../assets/Frenik-Brand-Video.mp4")} type="video/mp4"/>
  </video>




  <div>
    <Quiz2 />
  </div>


<footer className="mt-5 pt-5">
  <div className="pt-4 d-flex justify-content-center">
    <a className="p-4 bd-highlight" href="#"><img className="socialIcon" src={require("../assets/fbicon.png")} alt="facebook"/></a>
    <a className="p-4 bd-highlight" href="#"><img className="socialIcon" src={require("../assets/igicon.png")} alt="instagram"/></a>
    <a className="p-4 bd-highlight" href="#"><img className="socialIcon" src={require("../assets/liicon.png")} alt="linkedin"/></a>
    <a className="p-4 bd-highlight" href="#"><img className="socialIcon" src={require("../assets/yticon.png")} alt="youtube"/></a>
  </div>
  <div className=" d-flex justify-content-center">
    <a className="p-4 bd-highlight footerlinks" href="/work">Work</a>
    <a className="p-4 bd-highlight footerlinks" href="/capabilities">Capabilities</a>
    <a className="p-4 bd-highlight footerlinks" href="/about">About</a>
    <a className="p-4 bd-highlight footerlinks" href="/resources">Resources</a>
  </div>
  <div className="pt-3 d-flex justify-content-center">
    <p>855.937.3645 | <a className="email" href="mailto:someone@example.com">
        support@freniklabs.com</a>.</p>
  </div>
  <div className="pt-1 d-flex justify-content-center">
    <p> 4940 Peachtree Ind Blvd, Ste. #320, Berkley Lake, GA </p>
  </div>
  <div className="pt-1 d-flex justify-content-center">
    <p className="copyright"> © Frenik Marketing Group, 2019 </p>
  </div>


</footer>

  </div>
    )
  }
}
export default Work;
