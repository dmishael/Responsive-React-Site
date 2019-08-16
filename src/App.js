import React, { Component } from 'react';
// import './App.css';
import Blog from './components/social';
import Home from './components/home';

class App extends Component {

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
    <Blog social={this.state.social}/>
    <Home/>
    </div>
  )
}
}
export default App;
