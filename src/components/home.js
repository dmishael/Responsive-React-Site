import React, { Component } from "react";
import "../App.css";
import BlogPosts from "./blogPosts.js"
import Slider from "react-slick";
import SimpleSlider from "./simpleSlider.js";
import SliderTwo from "./sliderTwo.js";
import HomeSlider from "./homeSlider.js";
import Quiz from "./quiz.js"

class Home extends Component {
  state = {
    social: true,
    technology: false,
    industry: false,
    videos: false

  };

  render() {


    return (
      <div className="Home">
        <div class="homepageHero hpHeader">
          <nav class="navbar position navbar-expand-lg navbar-dark bg-transparent">
            <a class="navbar-brand" href="#">
              <img
                src={require("../assets/frenik_grey_logo.png")}
                class="fmglogo"
                alt="frenik logo"
              />{" "}
            </a>
            <button
              class="hamburger navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="mr-5 collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
                <li class="m-5 nav-item">
                  <a class="navLink" href="#">
                    Work
                  </a>
                </li>
                <li class="m-5 nav-i   tem">
                  <a class="navLink" href="#">
                    Capabilities
                  </a>
                </li>
                <li class="m-5 nav-item">
                  <a class="navLink" href="#">
                    About
                  </a>
                </li>
                <li class="m-5 nav-item">
                  <a class="navLink" href="#">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="pt-2 mt-2 hpHeaderText d-flex justify-content-center">
            We Shine a Light On
          </div>

          <div class="pt-5 mt-5 hpHeaderText2 d-flex justify-content-center">
            Pseudoscience
          </div>

          <div class="pt-4 mt-4 hpHeaderText3 d-flex justify-content-center">
            stuff we've made
          </div>
          <div class="pt-5 mt-5 hpHeaderText3 d-flex justify-content-center">
            <img
              class="arrow arrowBounce"
              src={require("../assets/arrow.png")}
              alt="arrow"
            />
          </div>
        </div>

        <div class="card bg-light cardBlock m-auto justify-content-center shadow p-3 mb-5 bg-white">
          <div>
            <h5 class="text-center dictionary m-3">
              /frəˈnäləjē ər frəˈnik?/
            </h5>
            <div class="text-center phrenik m-3">
              PHRENOLOGY OR FRENIK?
            </div>
            <p class="card-text text-center dictionaryFrenikText m-4">
              Our name comes from one of the most notorious pieces of
              pseudoscience in history: Phrenology – the practice of measuring
              the skull to determine personality and acumen. Since we are in the
              business of calling out bad ideas while finding and amplifying a
              brand’s true identity, we chose to reclaim the idea and wear
              “Frenik” as our calling card in the battle against shortcuts and
              complacency.
            </p>
          </div>
        </div>
        <video
          width="100%"
          height="auto"
          poster={require("../assets/yearinreview_thumbnail.png")}
          controls
        >
          <source
            src="http://fmg.fmglabs.com/wp-content/uploads/2019/06/Frenik-Year-in-Review-2018.mp4"
            type="video/mp4"
          />
        </video>


          <div class="slick">
            <SimpleSlider />

          </div>


        <div class="p-3">
          <div class="pt-2 mt-2 weDoAlot">
            we do a lot. we can do a lot for you.
          </div>

          <div class="pt-2 mt-2 mb-5 dictionaryFrenikText">
            Whether we are working one-off projects or acting as your bolt-on
            marketing department, our approach is the same.
          </div>

          <div class="d-flex justify-content-center">
          <div class="row row-fluid flex-grid weDo ml-2">
            <div class="border-left mb-5 pb-5 mr-5">
              <ul class="whatWeDoH mb-2 mr-5 ml-2">tell your story</ul>

                <li class="pt-2 ml-3 whatWeDoText">Branding</li>
                <li class="pt-2 ml-3 whatWeDoText">PR</li>
                <li class="pt-2 ml-3 whatWeDoText">Social</li>

              <a class="mt-5 ml-3 d-flex justify-content-bottom" href="#">
                <p class="internalButton">see more</p>
              </a>
            </div>

            <div class="border-left mb-5 pb-5 mr-5">
              <ul class="whatWeDoH mb-2 ml-2">make all the things</ul>

                <li class="pt-2 ml-3 whatWeDoText">Creative Services</li>
                <li class="pt-2 ml-3 whatWeDoText">Video Production</li>
                <li class="pt-2 ml-3 whatWeDoText">Technology Development</li>

              <a class="mt-5 pt-4 ml-3 d-flex justify-content-right" href="#">
                <p class="internalButton">see more</p>
              </a>
            </div>

            <div class="border-left mb-5 pb-5 mr-5">
              <ul class="whatWeDoH mb-2 ml-2">build loyalty & Growth</ul>

                <li class="pt-2 ml-3 whatWeDoText">SEO & SEM</li>
                <li class="pt-2 ml-3 whatWeDoText">Digital Advertising</li>
                <li class="pt-2 ml-3 whatWeDoText">Traditional Media</li>
                <li class="pt-2 ml-3 whatWeDoText">Experiential Marketing</li>

              <a class="mt-5 pt-3 ml-3 d-flex justify-content-right" href="#">
                <p class="internalButton">see more</p>
              </a>
            </div>

            <div class="border-left mb-5 pb-5 mr-5 col">
              <ul class="whatWeDoH mb-2 ml-2">tell your story</ul>

                <li class="pt-2 ml-3 whatWeDoText">Full ROI Reporting</li>
                <li class="pt-2 ml-3 whatWeDoText">
                  Actionable Intelligence with Recommendations
                </li>
                <li class="pt-2 ml-3 whatWeDoText">Consulting</li>

              <a class="mt-5 pt-5 ml-3 d-flex justify-content-right" href="#">
                <p class="internalButton">see more</p>
              </a>
            </div>
          </div>
        </div>
        </div>


        <div class="weMakeGreatWork align-middle d-flex justify-content-around">
          <p class="weDoAlot m-5">we make great work</p>
        </div>
        <div class="slick">
          <SliderTwo />

        </div>


        <div class="weCool">
          <div class="p-5 m-5 weDoAlot d-flex justify-content-center">
            we're pretty cool
          </div>

          <div class="centered">
          <div class="row row-fluid flex-grid weDo ml-2">
            <div class=" col-sm-12 col-md-3 ml-3 mr-5 mt-2">
              <h1 class="whatWeDoH ml-2 mb-2">curious</h1>
              <p class="weCoolText ml-2">
                We love exploring and don’t settle for quick, easy or obvious
                answers; we know they are often wrong.{" "}
              </p>
            </div>

            <div class="border-left col-sm-12 col-md-3 ml-3 mr-5 mt-2">
              <h1 class="whatWeDoH ml-2 mb-2">optimistic</h1>
              <p class="weCoolText ml-2">
                We never met a challenge we didn’t like. No matter the problem,
                there’s always at least one way to solve it.{" "}
              </p>
            </div>

            <div class="border-left col-sm-12 col-md-3 ml-3 mr-5 mt-2">
              <h1 class="whatWeDoH ml-2 mb-2">real talk</h1>
              <p class="weCoolText ml-2">
                Our clients tell us this, so we decided to tell you: our
                approach is grounded and lacks the fluff and woo of other
                agencies.{" "}
              </p>
            </div>
          </div>
          </div>

          <div class="pt-4">
            <a class="mt-5 pt-3 weDo d-flex justify-content-center" href="#">
              <span class="internalButton">meet our team</span>
            </a>
          </div>

          <div class="p-5 m-5 hpHeaderText3 d-flex justify-content-center">
            <img
              class="arrow arrowBounce"
              src={require("../assets/arrow.png")}
              alt="arrow"
            />
          </div>

        </div>


        <div>
          <Quiz/>
        </div>

        <div class="p-3">
          <div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
            we know a lot, too
          </div>


          <div>
            <BlogPosts/>
          </div>

        </div>



        <footer>
          <div class="pt-4 d-flex justify-content-center">
            <a class="p-4 bd-highlight" href="#">
              <img
                class="socialIcon"
                src={require("../assets/fbicon.png")}
                alt="facebook"
              />
            </a>
            <a class="p-4 bd-highlight" href="#">
              <img
                class="socialIcon"
                src={require("../assets/igicon.png")}
                alt="instagram"
              />
            </a>
            <a class="p-4 bd-highlight" href="#">
              <img
                class="socialIcon"
                src={require("../assets/liicon.png")}
                alt="linkedin"
              />
            </a>
            <a class="p-4 bd-highlight" href="#">
              <img
                class="socialIcon"
                src={require("../assets/yticon.png")}
                alt="youtube"
              />
            </a>
          </div>
          <div class="weKnowAlotNav">
          <div class="row">
            <div class="footer2">
            <a class="p-4 bd-highlight footerlinks" href="#">
              Work
            </a>
            <a class="p-4 bd-highlight footerlinks" href="#">
              Capabilities
            </a>
            <a class="p-4 bd-highlight footerlinks" href="#">
              About
            </a>
            <a class="p-4 bd-highlight footerlinks" href="#">
              Resources
            </a>
            </div>
          </div>
        </div>
          <div class="pt-3 d-flex justify-content-center">
            <p>
              855.937.3645 |{" "}
              <a class="email" href="mailto:someone@example.com">
                support@freniklabs.com
              </a>
              .
            </p>
          </div>
          <div class="pt-1 d-flex justify-content-center">
            <p> 4940 Peachtree Ind Blvd, Ste. #320, Berkley Lake, GA </p>
          </div>
          <div class="pt-1 d-flex justify-content-center">
            <p class="copyright"> © Frenik Marketing Group, 2019 </p>
          </div>
        </footer>
      </div>
    );
  }
}
export default Home;
