import React, { Component } from "react";
// import Blog from './components/blog';
import "../App.css";

class SocialPost1 extends React.Component {
  state = {
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
    ]
  };

  render() {
    console.log(this.state.social);
    return (
      //if category clicked map through category posts and render all articles with an id of 1

      this.state.socialPosts.map(blog => (
        <div class="m-2 blogPost">
          <img src={blog.image} />
          <h3 className="blogArticles mt-4">{blog.title}</h3>
          <a className="internalButton2" href="#" >see more</a>
        </div>
      ))
    );
  }
}

export default SocialPost1;
