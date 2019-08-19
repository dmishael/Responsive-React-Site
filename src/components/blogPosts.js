import React, { Component } from "react";
import "../App.css";
import SocialPost1 from "./social.js";
import TechPost1 from "./tech.js";
import IndustryPost1 from "./industry.js";
import VideoPost1 from "./video.js";

class BlogPosts extends Component {
  state = {
    social: false,
    technology: false,
    industry: false,
    videos: false
  };

  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <button class="m-5"
            onClick={() => {
              this.setState({ social: true });
              this.setState({ technology: false });
              this.setState({ industry: false });
              this.setState({ videos: false });
            }}
          >
            SOCIAL MEDIA
          </button>

          <button class="m-5"
            onClick={() => {
              this.setState({ social: false });
              this.setState({ technology: true });
              this.setState({ industry: false });
              this.setState({ videos: false });
            }}
          >
            TECHNOLOGY
          </button>

          <button class="m-5"
            onClick={() => {
              this.setState({ social: false });
              this.setState({ technology: false });
              this.setState({ industry: true });
              this.setState({ videos: false });
            }}
          >
            INDUSTRY NEWS
          </button>

          <button class="m-5"
            onClick={() => {
              this.setState({ social: false });
              this.setState({ technology: false });
              this.setState({ industry: false });
              this.setState({ videos: true });
            }}
          >
            VIDEOS
          </button>
        </div>

        <div class="row d-flex justify-content-center blogPost mt-3 mb-3">
          {this.state.social ? <SocialPost1 /> : null}
          {this.state.technology ? <TechPost1 /> : null}
          {this.state.industry ? <IndustryPost1 /> : null}
          {this.state.videos ? <VideoPost1 /> : null}
        </div>


        <div class="pb-4">
          <a class="m-5 p-5 weDo d-flex justify-content-center" href="#">
            <span class="internalButton">more from our blog</span>
          </a>
        </div>


      </div>

    );
  }
}

export default BlogPosts;
