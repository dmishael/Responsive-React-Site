import React, { Component } from "react";
// import Blog from './components/blog';
import "../App.css";

class VideoPost1 extends React.Component {
  state = {
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
  };

  render() {
    console.log(this.state.videoPosts);
    return (
      //if category clicked map through category posts and render all articles with an id of 1

      this.state.videoPosts.map(blog => (
        <div class="m-2 blogPost">
          <img className="blogVideos" src={blog.image} />
          <h3 className="blogArticles mt-4">{blog.title}</h3>
          <a className="internalButton2" href="#" >see more</a>
        </div>
      ))
    );
  }
}

export default VideoPost1;
