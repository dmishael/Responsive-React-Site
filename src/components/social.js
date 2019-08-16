import React, { Component } from 'react';
// import Blog from './components/blog';
import '../App.css';

class Social extends Component {
  render() {
    // console.log(this.props.social)
  return (
    this.props.blogPosts.map((blog) => (
      <h1 className="Blog"> {blog.title}</h1>
    )
  ))
}
}
export default Social;
