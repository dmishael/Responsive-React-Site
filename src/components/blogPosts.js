import React, { Component } from "react";
import "../App.css";



class BlogPosts extends Component {
  state = {
    social: false,
    socialPosts: [
      {
        id: 1,
        image: require("../assets/artificial-intelligence-200x200.jpg"),
        date: "",
        title: "the artificial intelligence takeover",
        tag: "social media",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/tech.jpg"),
        date: "",
        title: "will amazon scout be the future of delivery service",
        tag: "social media",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/apps.jpg"),
        date: "",
        title: "4 apps you need to survive the holiday season",
        tag: "social media",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/cms.jpg"),
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
        image: require("../assets/tech1.jpg"),
        date: "",
        title:
          "THE ADVERTISING WAR: DIGITAL FINALLY TRIUMPSH OVER TRADIONAL AND PRINT",
        tag: "technology",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/tech2.jpg"),
        date: "",
        title: "BRANDS ARE ALL ABOUT FAKE NEWS ON APRIL FOOLS' DAY",
        tag: "technology",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/tech3.jpg"),
        date: "",
        title:
          "SOUTH BY SOUTHWEST CONTINUES ANOTHER YEAR OF ENTERTAINMENT, BRAND ACTIVATION AND GROWTH IN AUSTIN, TEXAS",
        tag: "technology",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/tech4.jpg"),
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
        image: require("../assets/ind1.jpg"),
        date: "",
        title:
          "A MOVIE CAN BE ‘BOOKSMART’ AND STILL MISS THE MARK ON MARKETING STRATEGY",
        tag: "industry",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/ind2.jpg"),
        date: "",
        title:
          "STARBUCKS IS COMING: HOW ‘GAME OF THRONES’ GAVE THE COFFEE CHAIN MILLIONS IN FREE ADVERTISING",
        tag: "industry",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/ind3.jpg"),
        date: "",
        title: "BRANDS ARE ALL ABOUT FAKE NEWS ON APRIL FOOLS’ DAY",
        tag: "industry",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/ind4.jpg"),
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
        image: require("../assets/enlightenedDigital.png"),
        date: "",
        title: "ENLIGHTENED DIGITAL – GACS DIGITAL STRATEGY",
        tag: "video",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/enlightenedDigital.png"),
        date: "",
        title: "ENLIGHTENED DIGITAL – APPLICATION PROGRAMMING INTERFACE (API)",
        tag: "video",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/enlightenedDigital.png"),
        date: "",
        title: "ENLIGHTENED DIGITAL – AUTOMATION TECHNOLOGY",
        tag: "video",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/enlightenedDigital.png"),
        date: "",
        title: "ENLIGHTENED DIGITAL – CONTENT MANAGEMENT SYSTEMS",
        tag: "video",
        article: "blah blah blah"
      }
    ]
  }

  componentDidMount() {
  console.log(this.props)
  }



  render() {

    return (
      <div>
        <div class="weKnowAlotNav">
        <div class="m-5 row">
          <a
            class="m-2 weKnowButtons"
            onClick={() => {
              this.setState({ social: true });
              this.setState({ technology: false });
              this.setState({ industry: false });
              this.setState({ videos: false });
            }}
          >
            SOCIAL MEDIA
          </a>

          <a
            class="m-2 weKnowButtons"
            onClick={() => {
              this.setState({ social: false });
              this.setState({ technology: true });
              this.setState({ industry: false });
              this.setState({ videos: false });
            }}
          >
            TECHNOLOGY
          </a>

          <a
            class="m-2 weKnowButtons"
            onClick={() => {
              this.setState({ social: false });
              this.setState({ technology: false });
              this.setState({ industry: true });
              this.setState({ videos: false });
            }}
          >
            INDUSTRY NEWS
          </a>

          <a
            class="m-2 weKnowButtons"
            onClick={() => {
              this.setState({ social: false });
              this.setState({ technology: false });
              this.setState({ industry: false });
              this.setState({ videos: true });
            }}
          >
            VIDEOS
          </a>
        </div>
        </div>

        <div class="row d-flex justify-content-center blogPost mt-3 mb-3">
          {this.state.social
            ? this.state.socialPosts.map(blog => (
                <div class="m-2 blogPost">
                  <img src={blog.image} />
                  <h3 className="blogArticles mt-4">{blog.title}</h3>
                  <a className="internalButton2" href="#">
                    see more
                  </a>
                </div>
              ))
            : null}
          {this.state.technology
            ? this.state.techPosts.map(blog => (
                <div class="m-2 blogPost">
                  <img src={blog.image} />
                  <h3 className="blogArticles mt-4">{blog.title}</h3>
                  <a className="internalButton2" href="#">
                    see more
                  </a>
                </div>
              ))
            : null}
          {this.state.industry
            ? this.state.industryPosts.map(blog => (
                <div class="m-2 blogPost">
                  <img src={blog.image} />
                  <h3 className="blogArticles mt-4">{blog.title}</h3>
                  <a className="internalButton2" href="#">
                    see more
                  </a>
                </div>
              ))
            : null}
          {this.state.videos
            ? this.state.videoPosts.map(blog => (
                <div class="m-2 blogPost">
                  <img className="blogVideos" src={blog.image} />
                  <h3 className="blogArticles mt-4">{blog.title}</h3>
                  <a className="internalButton2" href="#">
                    see more
                  </a>
                </div>
              ))
            : null}
        </div>

        <div class="pb-4">
          <a class="m-5 p-5 weDo d-flex justify-content-center" href="#">
            <span class="internalButton">more from our blog</span>
          </a>
        </div>
        <div>

        </div>

      </div>
    );

}}

export default BlogPosts;
