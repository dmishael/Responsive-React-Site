import React, { Component } from "react";
import "../../App.css";

class BlogPageTechnology extends Component {
  state = {
    social: false,
    socialPosts: [
      {
        id: 1,
        image: require("../../assets/artificial-intelligence-200x200.jpg"),
        date: "",
        title: "the artificial intelligence takeover",
        tag: "social media",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/tech.jpg"),
        date: "",
        title: "will amazon scout be the future of delivery service",
        tag: "social media",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/apps.jpg"),
        date: "",
        title: "4 apps you need to survive the holiday season",
        tag: "social media",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/cms.jpg"),
        date: "",
        title: "beginner's guide to cms: make it work for you",
        tag: "social media",
        article: "blah blah blah"
      }
    ],
    technology: false,
    techPosts: [
      {
        id: 1,
        image: require("../../assets/tech1.jpg"),
        date: "",
        title:
          "THE ADVERTISING WAR: DIGITAL FINALLY TRIUMPSH OVER TRADIONAL AND PRINT",
        tag: "technology",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/tech2.jpg"),
        date: "",
        title: "BRANDS ARE ALL ABOUT FAKE NEWS ON APRIL FOOLS' DAY",
        tag: "technology",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/tech3.jpg"),
        date: "",
        title:
          "SOUTH BY SOUTHWEST CONTINUES ANOTHER YEAR OF ENTERTAINMENT, BRAND ACTIVATION AND GROWTH IN AUSTIN, TEXAS",
        tag: "technology",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/tech4.jpg"),
        date: "",
        title: "SONIC BRANDING: WHY LEVERAGE SOUND FOR YOUR BUSINESS",
        tag: "technology",
        article: "blah blah blah"
      }
    ],
    industry: false,
    industryPosts: [
      {
        id: 1,
        image: require("../../assets/ind1.jpg"),
        date: "",
        title:
          "A MOVIE CAN BE ‘BOOKSMART’ AND STILL MISS THE MARK ON MARKETING STRATEGY",
        tag: "industry",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/ind2.jpg"),
        date: "",
        title:
          "STARBUCKS IS COMING: HOW ‘GAME OF THRONES’ GAVE THE COFFEE CHAIN MILLIONS IN FREE ADVERTISING",
        tag: "industry",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/ind3.jpg"),
        date: "",
        title: "BRANDS ARE ALL ABOUT FAKE NEWS ON APRIL FOOLS’ DAY",
        tag: "industry",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/ind4.jpg"),
        date: "",
        title: "SOCIAL MEDIA MARKETING TRENDS PREDICTED TO DOMINATE 2019",
        tag: "industry",
        article: "blah blah blah"
      }
    ],
    videos: false,
    videoPosts: [
      {
        id: 1,
        image: require("../../assets/enlightenedDigital.png"),
        date: "",
        title: "ENLIGHTENED DIGITAL – GACS DIGITAL STRATEGY",
        tag: "video",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/enlightenedDigital.png"),
        date: "",
        title: "ENLIGHTENED DIGITAL – APPLICATION PROGRAMMING INTERFACE (API)",
        tag: "video",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/enlightenedDigital.png"),
        date: "",
        title: "ENLIGHTENED DIGITAL – AUTOMATION TECHNOLOGY",
        tag: "video",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../../assets/enlightenedDigital.png"),
        date: "",
        title: "ENLIGHTENED DIGITAL – CONTENT MANAGEMENT SYSTEMS",
        tag: "video",
        article: "blah blah blah"
      }
    ]
  };

  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return (
      <div className="BlogPage">
        <nav class="navbar position navbar-expand-lg navbar-dark bg-transparent">
          <a class="navbar-brand" href="#">
            <img
              src={require("../../assets/frenik_grey_logo.png")}
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
        <div class="blogStarter"></div>
        <div class="blogMain">
          <div class="blogTitle">Technology</div>
          <div class="blogPost container-fluid p-0">
            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={this.state.techPosts[0].image}
                    class="card-img block"
                    alt="..."
                  />
                </div>
                <div class="col-md-8 ">
                  <div class="card-body">
                    <div class="blogPostTitle mt-5">
                      {this.state.techPosts[0].title}
                    </div>
                    <a class="mt-5 d-flex justify-content-bottom" href="#">
                      <p class="internalButton">read more</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={this.state.techPosts[1].image}
                    class="card-img block"
                    alt="..."
                  />
                </div>
                <div class="col-md-8 m-0 p-0">
                  <div class="card-body">
                    <div class="blogPostTitle mt-5">
                      {this.state.techPosts[1].title}
                    </div>
                    <a class="mt-5 d-flex justify-content-bottom" href="#">
                      <p class="internalButton">read more</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={this.state.techPosts[2].image}
                    class="card-img block"
                    alt="..."
                  />
                </div>
                <div class="col-md-8 m-0 p-0">
                  <div class="card-body">
                    <div class="blogPostTitle mt-5">
                      {this.state.techPosts[2].title}
                    </div>
                    <a class="mt-5 d-flex justify-content-bottom" href="#">
                      <p class="internalButton">read more</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={this.state.techPosts[3].image}
                    class="card-img block"
                    alt="..."
                  />
                </div>
                <div class="col-md-8 m-0 p-0">
                  <div class="card-body">
                    <div class="blogPostTitle mt-5">
                      {this.state.techPosts[3].title}
                    </div>
                    <a class="mt-5 d-flex justify-content-bottom" href="#">
                      <p class="internalButton">read more</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPageTechnology;
