import React, { Component } from 'react';
import '../App.css';

class Blog extends Component {
  render() {
    // console.log(this.props.social)
  return (
    this.props.social.map((blog) => (
      <h1 className="Blog"> {blog.title}</h1>
    )
  ))
}
}
export default Blog;
