import React, { Component } from 'react';
import './App.css';
import Social from './components/social';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Blog extends Component {

  state = {
    social: [
      {
        image: '',
        date: '',
        title: 'lorum ipsum',
        tag: 'social media',
        article: 'blah blah blah'
      },
      {
        image: '',
        date: '',
        title: 'lorum ipsum',
        tag: 'social media',
        article: 'blah blah blah'
      },
      {
        image: '',
        date: '',
        title: 'lorum ipsum',
        tag: 'social media',
        article: 'blah blah blah'
      },
    ]

  }
render() {
  console.log(this.state.social)
  return (
    <div className="App">
    <Social blogPosts={this.state.social}/>
    </div>
  )
}
}
export default Blog;
