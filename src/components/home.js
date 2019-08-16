import React, { Component } from 'react';
import '../App.css';
import Slider from "react-slick";
import SimpleSlider from './homeSlider.js'

class Home extends Component {

  render() {
    // console.log(this.props.social)
  return (
    <div className="Home">
    <div class="homepageHero hpHeader">

  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
    <a class="navbar-brand" href="#"><img src={require('../assets/frenik_grey_logo.png')} class="fmglogo" alt="frenik logo"/> </a>
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
    <img class="arrow arrowBounce" src={require('../assets/arrow.png')} alt="arrow"/>

  </div>

</div>

// Phrenoklogy or Frenik?


<div class="card bg-light cardBlock m-auto justify-content-center shadow p-3 mb-5 bg-white">
  <div>
    <h5 class="card-title text-center dictionary">/frəˈnäləjē ər frəˈnik?/</h5>
    <h5 class="card-title text-center dictionaryFrenik">PHRENOLOGY OR FRENIK?</h5>
    <p class="card-text text-center dictionaryFrenikText">Our name comes from one of the most notorious pieces of pseudoscience in history: Phrenology – the practice of measuring the skull to determine personality and acumen. Since we are in the
      business of calling out bad ideas while finding and amplifying a brand’s true identity, we chose to reclaim the idea and wear “Frenik” as our calling card in the battle against shortcuts and complacency.</p>
  </div>
</div>


<video width="100%" height="670px" poster={require('../assets/yearinreview_thumbnail.png')} controls>
  <source src="http://fmg.fmglabs.com/wp-content/uploads/2019/06/Frenik-Year-in-Review-2018.mp4" type="video/mp4"/>
</video>

// slick slider

// <section id="slideshow">
//   <div class="slick">
<SimpleSlider class="slick" id="slideshow"/>
//   </div>
// </section>

// We do alot for you

<div class="p-3">


  <div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
    we do a lot. we can do a lot for you.
  </div>

  <div class="pt-2 mt-5 mb-5 dictionaryFrenikText d-flex justify-content-center">
    Whether we are working one-off projects or acting as your bolt-on marketing department, our approach is the same.
  </div>


  <div class="row row-fluid flex-grid weDo">
    <div class="border-right mb-5 pb-5 col">
      <h1 class="whatWeDoH ml-2 mb-2">tell your story</h1>
      <ul class="whatWeDoText ml-4">
        <li class="pt-2">Branding</li>
        <li class="pt-2">PR</li>
        <li class="pt-2">Social</li>
      </ul>
      <a class="mt-5 ml-3 d-flex justify-content-bottom" href="#">
        <p class="internalButton">see more</p>
      </a>
    </div>

    <div class="border-right mb-5 pb-5 col">
      <h1 class="whatWeDoH ml-2 mb-2">make all the things</h1>
      <ul class="whatWeDoText ml-4">
        <li class="pt-2">Creative Services</li>
        <li class="pt-2">Video Production</li>
        <li class="pt-2">Technology Development</li>
      </ul>
      <a class="mt-5 pt-4 ml-3 d-flex justify-content-right" href="#">
        <p class="internalButton">see more</p>
      </a>
    </div>

    <div class="border-right mb-5 pb-5 col">
      <h1 class="whatWeDoH ml-2 mb-2">build loyalty & Growth</h1>
      <ul class="whatWeDoText ml-4">
        <li class="pt-2">SEO & SEM</li>
        <li class="pt-2">Digital Advertising</li>
        <li class="pt-2">Traditional Media</li>
        <li class="pt-2">Experiential Marketing</li>
      </ul>
      <a class="mt-5 pt-3 ml-3 d-flex justify-content-right" href="#">
        <p class="internalButton">see more</p>
      </a>
    </div>

    <div class=" mb-5 pb-5 mr-3 col">
      <h1 class="whatWeDoH ml-2 mb-2">tell your story</h1>
      <ul class="whatWeDoText ml-4">
        <li class="pt-2">Full ROI Reporting</li>
        <li class="pt-2">Actionable Intelligence with Recommendations</li>
        <li class="pt-2">Consulting</li>
      </ul>
      <a class="mt-5 pt-5 ml-3 d-flex justify-content-right" href="#">
        <p class="internalButton">see more</p>
      </a>
    </div>

  </div>


</div>


// We make great work

<div class="weMakeGreatWork align-middle d-flex justify-content-around">
  <p class="weDoAlot m-5">we make great work</p>
</div>

<div class="">


  <div class="carousel" id="carousel">
    <a class="carousel-item" href="#one!"><img src={require('../assets/americancasualliving_logo.png')} alt="ACL"/></a>
    <a class="carousel-item" href="#two!"><img src={require('../assets/Mimaki.png')} alt="M"/></a>
    <a class="carousel-item" href="#three!"><img src={require('../assets/United-Way-Logo-1.png')} alt="UW"/></a>
  </div>
</div>

// We're pretty cool'

<div class="p-3 weCool">


  <div class="p-5 m-5 weDoAlot d-flex justify-content-center">
    we're pretty cool
  </div>

  <div class="row row-fluid flex-grid weDo mb-2 pb-2">

    <div class="border-right col">
      <h1 class="whatWeDoH ml-2 mb-2">curious</h1>
      <p class=" ml-2">We love exploring and don’t settle for
        quick, easy or obvious answers; we
        know they are often wrong. </p>
    </div>

    <div class="border-right col">
      <h1 class="whatWeDoH ml-2 mb-2">optimistic</h1>
      <p class=" ml-2">We never met a challenge we didn’t
        like. No matter the problem, there’s
        always at least one way to solve it. </p>
    </div>

    <div class="col">
      <h1 class="whatWeDoH ml-2 mb-2">real talk</h1>
      <p class="ml-2">Our clients tell us this, so we decided
        to tell you: our approach is grounded
        and lacks the fluff and woo of other
        agencies. </p>
    </div>



  </div>
  <div class="pt-4">
    <a class="mt-5 pt-3 weDo d-flex justify-content-center" href="#">
      <span class="internalButton">meet our team</span>
    </a>
  </div>

  <div class="p-5 m-5 hpHeaderText3 d-flex justify-content-center">
    <img class="arrow arrowBounce" src={require('../assets/arrow.png')} alt="arrow"/>

  </div>


</div>

// We're pretty cool'

<div class="quizPlaceholder d-flex justify-content-center">
  Quiz Placeholder
</div>

  // We know alot too

  <div class="p-3">


    <div class="pt-2 mt-5  d-flex justify-content-center weDoAlot">
      we know a lot, too
    </div>

    <div class="pt-2 mt-5 mb-5 dictionaryFrenikText d-flex justify-content-center">
      pull rest of dynamic content from Resources page script once completed...
    </div>


    <div class="row row-fluid flex-grid weDo">
      <div class="border-right mb-5 pb-5 col">
        <h1 class="whatWeDoH ml-2 mb-2">tell your story</h1>
        <ul class="whatWeDoText ml-4">
          <li class="pt-2">Branding</li>
          <li class="pt-2">PR</li>
          <li class="pt-2">Social</li>
        </ul>
        <a class="mt-5 ml-3 d-flex justify-content-bottom" href="#">
          <p class="internalButton">see more</p>
        </a>
      </div>

      <div class="border-right mb-5 pb-5 col">
        <h1 class="whatWeDoH ml-2 mb-2">make all the things</h1>
        <ul class="whatWeDoText ml-4">
          <li class="pt-2">Creative Services</li>
          <li class="pt-2">Video Production</li>
          <li class="pt-2">Technology Development</li>
        </ul>
        <a class="mt-5 pt-4 ml-3 d-flex justify-content-right" href="#">
          <p class="internalButton">see more</p>
        </a>
      </div>

      <div class="border-right mb-5 pb-5 col">
        <h1 class="whatWeDoH ml-2 mb-2">build loyalty & Growth</h1>
        <ul class="whatWeDoText ml-4">
          <li class="pt-2">SEO & SEM</li>
          <li class="pt-2">Digital Advertising</li>
          <li class="pt-2">Traditional Media</li>
          <li class="pt-2">Experiential Marketing</li>
        </ul>
        <a class="mt-5 pt-3 ml-3 d-flex justify-content-right" href="#">
          <p class="internalButton">see more</p>
        </a>
      </div>

      <div class=" mb-5 pb-5 mr-3 col">
        <h1 class="whatWeDoH ml-2 mb-2">tell your story</h1>
        <ul class="whatWeDoText ml-4">
          <li class="pt-2">Full ROI Reporting</li>
          <li class="pt-2">Actionable Intelligence with Recommendations</li>
          <li class="pt-2">Consulting</li>
        </ul>
        <a class="mt-5 pt-5 ml-3 d-flex justify-content-right" href="#">
          <p class="internalButton">see more</p>
        </a>
      </div>

    </div>


  </div>

  <div class="pb-4">
    <a class="m-5 p-5 weDo d-flex justify-content-center" href="#">
      <span class="internalButton">more from our blog</span>
    </a>
  </div>

<div class=" ml-4 hpHeader hpHeaderText">

  <div class="hpHeaderText">
    <h1 class="hpHeaderText">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>

</div> -->




<footer>
  <div class="pt-4 d-flex justify-content-center">
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require('../assets/fbicon.png')} alt="facebook"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require('../assets/igicon.png')} alt="instagram"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require('../assets/liicon.png')} alt="linkedin"/></a>
    <a class="p-4 bd-highlight" href="#"><img class="socialIcon" src={require('../assets/yticon.png')} alt="youtube"/></a>
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
export default Home;
