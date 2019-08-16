import React, { Component } from "react";
import "../App.css";
import Slider from "react-slick";
import SimpleSlider from "./simpleSlider.js";
import HomeSlider from "./homeSlider.js";
import AboutSliderLogos from "./aboutSliderLogos.js";

class About extends Component {

  render() {
    // console.log(this.props.social)
    return (
      <div className="About">
        <div class="aboutHero wpHeader">

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

      <div class=" wpHeaderText2 wpHeaderTextAbout d-flex justify-content-center">
        FREN · OLOGY: N
      </div>

      <div class="pt-4 mt-4 wpHeaderText1 d-flex justify-content-center">
        the study of us
      </div>

    </div>

    <div class="">
      <div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
        at frenik, we get it
      </div>

      <div class="row mt-5 p-3">
        <div class="col-md-6 pr-2">
          <p class="text-left text-md-left wayWeWorkText pt-2">
            You’ve likely been taken for a ride by some agency who claimed to deliver the world, but ultimately made a mess of both your brand and your budget.
          </p>
          <p class="text-left text-md-left wayWeWorkText pt-2">
            That’s because the world of Agency Marketing is rife with bad ideas and pseudoscience—ideas masquerading as scientifically-based, but which instead rely on emotion and “common sense” to fool us.
          </p>
        </div>
        <img class="col-md-6 p-3" src={require("../assets/atFrenikWeGetIt.png")} alt="we get it"/>
      </div>

      <div class="">
        <div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
          we are the ones who check
        </div>

        <div class="row mt-5 p-3">
          <img class="col-md-6 p-3" src={require("../assets/theOnesWhoCheck.png")} alt="we get it"/>
          <div class="col-md-6 pr-2">
            <p class="text-left text-md-left wayWeWorkText pt-2">
              Driven by a team of curious, optimistic people, <strong> we don’t settle for the quick, easy or obvious answers</strong>; we know they are often wrong.
            </p>
            <p class="text-left text-md-left wayWeWorkText pt-2">
              Whether you come to us for individual projects or to act as your bolt-on, full-service agency, we act as both brand psychologist and architect to discover who you are, and build your brand, messaging, and technology on solid foundations.
            </p>
          </div>
        </div>

      </div>

      <div class="weMakeGreatWork leadershipTeam">
        <div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
          leadership team
        </div>

        <div class="row pt-3 m-5 ">
          <div class="col-sm-4 imgWrap">
            <img class="workClientImages center-block" src={require("../assets/jordan_headshot_edited.jpg")} alt="Jordan"/>
            <div class="imgDescription">
              <p class="center-align">Jordan</p>
              <p class="center-align title">Founder</p>
            </div>
          </div>

          <div class="col-sm-4 imgWrap">
            <img class="workClientImages center-block" src={require("../assets/stosh-headshot.png")} alt="Stosh"/>
            <div class="imgDescription">
              <p class="center-align">Stosh</p>
              <p class="center-align title">Director of Sales and Operations</p>
            </div>
          </div>

          <div class="col-sm-4 imgWrap">
            <img class="workClientImages center-block" src={require("../assets/casey_headshot.jpg")} alt="Casey"/>
            <div class="imgDescription">
              <p class="center-align">Casey</p>
              <p class="center-align title">Senior Creative Director</p>
            </div>
          </div>



        </div>




        <div class="row pt-3 m-5 ">
          <div class="col-sm-4 imgWrap">
            <img class="workClientImages center-block" src={require("../assets/vincent_headshot.jpg")} alt="Vincent"/>
            <div class="imgDescription">
              <p class="center-align">Vincent</p>
              <p class="center-align title">Director of Search & Paid Media</p>
            </div>
          </div>

          <div class="col-sm-4 imgWrap">
            <img class="workClientImages center-block" align="center" src={require("../assets/phil_headshot.jpg")} alt="Phil"/>
            <div class="imgDescription">
              <p class="center-align">Phil</p>
              <p class="center-align title">Senior Web Developer</p>
            </div>
          </div>

          <div class="col-sm-4 imgWrap">
            <img class="workClientImages center-block" align="center" src={require("../assets/mandy.png")} alt="Railmo"/>
            <div class="imgDescription">
              <p class="center-align">Mandy</p>
              <p class="center-align title">Project Manager</p>
            </div>
          </div>
        </div>

        <div class="text-center wayWeWorkHeader">
          think you'd be a good fit
        </div>

        <div class="pt-4">
          <a class="m-5 pb-3 weDo d-flex justify-content-center" href="#">
            <span class="internalButton">join the squad</span>
          </a>
        </div>
      </div>

      <div class="p-5 m-5 hpHeaderText3 d-flex justify-content-center">
        <img class="arrow arrowBounce" src={require("../assets/arrow.png")} alt="arrow"/>

      </div>

      <div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
        people like our stuff
      </div>

      <div >
        <img class="d-flex justify-content-center mr-0 ml-5" src={require("../assets/impact.png")}/>
      </div>

      <div class="p-5 m-5 hpHeaderText3 d-flex justify-content-center">
        <img class="arrow arrowBounce" src={require("../assets/arrow.png")} alt="arrow"/>

      </div>

      <div class="text-center wayWeWorkHeader">
        featured in
      </div>



    </div>

    <section id="slideshow" class="m-5 noGrey">

        <AboutSliderLogos class="slick noGrey" id="slideshow" />

    </section>

    <div class="p-5 m-5 hpHeaderText3 d-flex justify-content-center">
      <img class="arrow arrowBounce" src={require("../assets/arrow.png")} alt="arrow"/>
    </div>

    <div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
      we love giving back
    </div>

    <div class="pt-2 mt-5  d-flex justify-content-center wayWeWorkText">
      Even as we’ve grown, our community matters and we like to stay a part of it.
    </div>

    <div class="row auroraHero mb-0 pb-0">
      <div class="col-md-5 pr-2">
        <p class="text-center text-md-left wayWeWorkText aboutText m-5">
          “The Aurora Theater is a cornerstone of Lawrenceville and the fastest growing professional theater in the state of Georgia. When they reached out to us to rebuild their website, I jumped at the chance to partner with them”
        </p>
        <p class="text-center text-md-left wayWeWorkText aboutTextSignature m-5">
          jordan, frenik founder
        </p>
      </div>
      <img class="logo col-md-5 mt-5 ml-0 ml-md-5 " src={require("../assets/auroraLogo.png")} alt="aurora"/>
    </div>


    <div class="row allHandsHero mb-0 pb-0">
      <img class="logo col-md-5 mt-5 ml-0 ml-md-5 order-md-first" src={require("../assets/homeFirstLogo.png")} alt="homefirst"/>
      <div class="col-md-5 pr-2 order-first">
        <p class="text-center text-md-left wayWeWorkText aboutText m-5">
          “Typically, non-profit logos have a very specific look and feel, so giving HomeFirst a creative departure from the norm felt really good. Plus, when I think about all the good they will do, it is awesome to know I played a small part in that.”
        </p>
        <p class="text-center text-md-left wayWeWorkText aboutTextSignature m-5">
          ILYSE, FRENIK DESIGNER
        </p>
      </div>

    </div>

    <div class="row sparcHero mb-0 pb-0">
      <div class="col-md-5 pr-2">
        <p class="text-center text-md-left wayWeWorkText aboutText m-5">
          “I know I speak for everyone at Frenik when I say this was a project near and dear to our hearts. The work we did for SPARC was truly one of my proudest moments. This was a hands-on project and I feel so honored to have played a part in helping SPARC fulfill it’s mission for single parents. ”
        </p>
        <p class="text-center text-md-left wayWeWorkText aboutTextSignature m-5">
          jordan, frenik founder
        </p>
      </div>
      <img class="logo col-md-5 mt-5 ml-0 ml-md-5 " src={require("../assets/sparc.png")} alt="aurora"/>
    </div>

    <div class="row pencilsHero mb-0 pb-0">
      <img class="logo col-md-5 mt-5 ml-0 ml-md-5 order-md-first" src={require("../assets/foundation.png")} alt="homefirst"/>
      <div class="col-md-5 pr-2 order-first">
        <p class="text-center text-md-left wayWeWorkText aboutText m-5">
          “Both our founder, Jordan, and I are graduates of Norcross High School. To give back to the community that gave us so much and support the Foundation is a dream come true. It really feels like we’ve come full circle! Go Blue Devils!”
        </p>
        <p class="text-center text-md-left wayWeWorkText aboutTextSignature m-5">
          casey, senior creative director
        </p>
      </div>

    </div>




    <footer class="mt-0 pt-0">
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
export default About;
