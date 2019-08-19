import React, { Component } from "react";
// import Blog from './components/blog';
import "../App.css";

class TechPost1 extends React.Component {
  state = {
    techPosts: [
      {
        id: 1,
        image: require("../assets/tech1.jpg"),
        date: "",
        title: "THE ADVERTISING WAR: DIGITAL FINALLY TRIUMPSH OVER TRADIONAL AND PRINT",
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
        title: "SOUTH BY SOUTHWEST CONTINUES ANOTHER YEAR OF ENTERTAINMENT, BRAND ACTIVATION AND GROWTH IN AUSTIN, TEXAS",
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
    ]
  };

  render() {
    console.log(this.state.techPosts);
    return (
      //if category clicked map through category posts and render all articles with an id of 1

      this.state.techPosts.map(blog => (
        <div class="m-2 blogPost">
          <img src={blog.image} />
          <h3 className="blogArticles mt-4">{blog.title}</h3>
          <a className="internalButton2" href="#" >see more</a>
        </div>
      ))
    );
  }
}

export default TechPost1;
