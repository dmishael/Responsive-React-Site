import React, { Component } from "react";
import "./App.css";


class Blog extends Component {
  state = {
    social: [
      {
        id: 1,
        image: "",
        date: "",
        title: "green",
        tag: "social media",
        article: "blah blah blah"
      },
      {
        id: 2,
        image: "",
        date: "",
        title: "green",
        tag: "social media",
        article: "blah blah blah"
      },
      {
        id: 3,
        image: "",
        date: "",
        title: "blue",
        tag: "social media",
        article: "blah blah blah"
      }
    ]
  };
  render() {
    return (
      <div className="Blog">
      
      </div>
    );
  }
}
export default Blog;
