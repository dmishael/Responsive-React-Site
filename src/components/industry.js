import React, { Component } from "react";
// import Blog from './components/blog';
import "../App.css";

class IndustryPost1 extends React.Component {
  state = {
    industryPosts: [
      {
        id: 1,
        image: require("../assets/ind1.jpg"),
        date: "",
        title: "A MOVIE CAN BE ‘BOOKSMART’ AND STILL MISS THE MARK ON MARKETING STRATEGY",
        tag: "industry",
        article: "blah blah blah"
      },
      {
        id: 1,
        image: require("../assets/ind2.jpg"),
        date: "",
        title: "STARBUCKS IS COMING: HOW ‘GAME OF THRONES’ GAVE THE COFFEE CHAIN MILLIONS IN FREE ADVERTISING",
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
    ]
  };

  render() {
    console.log(this.state.industryPosts);
    return (
      //if category clicked map through category posts and render all articles with an id of 1

      this.state.industryPosts.map(blog => (
        <div class="m-2 blogPost">
          <img src={blog.image} />
          <h3 className="blogArticles mt-4">{blog.title}</h3>
          <a className="internalButton2" href="#" >see more</a>
        </div>
      ))
    );
  }
}

export default IndustryPost1;
